<template>
    <aside class="menu">
        <template v-for="item in menu" v-if="!item.meta.hidden && $auth.check(item.meta.auth)">
            <p class="menu-label"><b-icon :icon="item.meta.icon" size="is-small" /> {{ $t(item.meta.label) }}</p>

            <ul v-if="item.children.length" class="menu-list">
                <li v-for="section in item.children" v-if="!section.meta.hidden && $auth.check(section.meta.auth)">
                    <router-link :to="{ name: section.name }">{{ $t(section.meta.label) }}</router-link>
                </li>
            </ul>
        </template>
    </aside>
</template>

<script>
import { menu } from '../router'

export default {
    data () {
        return { menu }
    }
}
</script>
