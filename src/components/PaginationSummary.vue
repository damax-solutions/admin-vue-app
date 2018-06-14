<template>
    <div class="block">{{ $t('pager.displaying_results', pagination) }}</div>
</template>

<script>
import Pagination from '../pagination'

export default {
    props: {
        pagination: { type: Pagination, required: true }
    }
}
</script>
