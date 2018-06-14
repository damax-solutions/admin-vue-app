<template>
    <nav class="navbar is-black is-fixed-top" role="navigation">
        <div class="navbar-brand">
            <router-link :to="{ name: 'default' }" class="navbar-item">{{ brand }}</router-link>
            <a @click="toggleBurger" :class="{ 'is-active': burgerActive }" class="navbar-burger" role="button">
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': burgerActive }">
            <div class="navbar-end">

                <!--b-dropdown class="navbar-item" hoverable>
                    <a slot="trigger" class="navbar-link">dmitlaka@damax.solutions</a>
                    <b-dropdown-item>{{ $t('navigation.profile') }}</b-dropdown-item>
                    <b-dropdown-item>{{ $t('navigation.change_password') }}</b-dropdown-item>
                    <b-dropdown-item :separator="true" class="navbar-divider" />
                    <b-dropdown-item>{{ $t('navigation.logout') }}</b-dropdown-item>
                </b-dropdown-->

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">{{ $auth.user().email }}</a>
                    <div class="navbar-dropdown is-boxed">

                        <!-- User -->
                        <router-link :to="{ name: 'profile' }" class="navbar-item">{{ $t('profile.nav.view') }}</router-link>
                        <router-link :to="{ name: 'profile_change_password' }" class="navbar-item">{{ $t('password.nav.change') }}</router-link>
                        <hr class="navbar-divider">

                        <a @click.prevent="logout" class="navbar-item">{{ $t('security.nav.logout') }}</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        brand: { type: String, default: 'Damax Admin' }
    },

    data () {
        return {
            burgerActive: false
        }
    },

    methods: {
        toggleBurger () {
            this.burgerActive = !this.burgerActive
        },

        logout () {
            this.$auth.logout()
        }
    }
}
</script>
