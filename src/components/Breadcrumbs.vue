<template>
    <nav class="breadcrumb">
        <ul>
            <li v-for="(item, index) in items" :class="{ 'is-active': level === (index + 1) }">
                <router-link :to="{ name: item.name }">{{ $t(item.meta.label) }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { menu } from '../router'

export default {
    computed: {
        items () {
            return [this.$router.options.routes[0], ...this.collectItems(menu)]
        },

        level () {
            return this.items.length
        }
    },

    methods: {
        collectItems (menu) {
            let items = []

            for (const section of menu) {
                const collected = section.children ? this.collectItems(section.children) : []

                if (section.name === this.$route.name) {
                    collected.push(section)
                } else if (collected.length && section.name) {
                    collected.unshift(section)
                }

                items = items.concat(collected)
            }

            return items
        }
    }
}
</script>
