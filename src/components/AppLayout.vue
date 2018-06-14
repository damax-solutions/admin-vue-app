<template>
    <div class="app-main">
        <div class="columns">
            <div class="column is-hidden-mobile is-3-tablet is-2-desktop">
                <side-menu />
            </div>
            <div class="column app-content">
                <div class="level" v-if="!dashboard">
                    <div class="level-left">
                        <title-bar />
                    </div>
                    <div class="level-right">
                        <breadcrumbs />
                    </div>
                </div>

                <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
                    <router-view class="animated" />
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import SideMenu from './SideMenu'
import TitleBar from './TitleBar'
import Breadcrumbs from './Breadcrumbs'

export default {
    components: { SideMenu, TitleBar, Breadcrumbs },

    computed: {
        dashboard () {
            return this.$route.name === 'default'
        }
    },

    mounted () {
        document.body.classList.add('has-navbar-fixed-top')
    }
}
</script>
