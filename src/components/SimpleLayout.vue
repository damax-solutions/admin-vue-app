<template>
    <section class="hero is-light is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-6 is-offset-3">
                    <router-view />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted () {
        document.body.classList.remove('has-navbar-fixed-top')
    }
}
</script>
