<template>
    <div v-if="loaded && $auth.ready() && $auth.check()" id="app">
        <nprogress-container />

        <notifications :width="400" :duration="5000" />

        <nav-bar />

        <app-layout />
    </div>

    <div v-else-if="loaded && $auth.ready()">
        <nprogress-container />

        <simple-layout />
    </div>

    <section v-else class="hero is-fullheight">
        <div class="hero-body">
            <vue-loading type="spin" :size="{ width: '75px' }" />
        </div>
    </section>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer.vue'

import { NavBar, AppLayout, SimpleLayout } from './components'

export default {
    components: { NprogressContainer, NavBar, AppLayout, SimpleLayout },

    data () {
        return { loaded: false }
    },

    mounted () {
        setTimeout(() => {
            this.loaded = true
        }, 500)
    }
}
</script>
