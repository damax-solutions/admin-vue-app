<template>
    <nav class="pagination is-rounded" role="navigation">
        <a @click.prevent="navigateTo(pagination.prev)" :disabled="pagination.first" class="pagination-previous">{{ $t('pager.previous') }}</a>
        <a @click.prevent="navigateTo(pagination.next)" :disabled="pagination.last" class="pagination-next">{{ $t('pager.next') }}</a>

        <ul class="pagination-list">
            <li v-for="page in pagination.pages(proximity)">
                <a @click.prevent="navigateTo(page)" :class="['pagination-link', { 'is-current': page === pagination.page }]">{{ page }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import Pagination from '../pagination'

export default {
    props: {
        pagination: { type: Pagination, required: true },
        proximity: { type: Number, default: 3 }
    },

    methods: {
        navigateTo (page) {
            const query = page > 1 ? { page } : {}

            this.$router.push({ query, name: this.$route.name })

            this.$emit('page-changed', page)
        }
    }
}
</script>
