<template>
    <section v-if="$auth.check()" class="hero is-medium is-light">
        <div class="hero-body">
            <h1 class="title">Welcome</h1>
            <p class="subtitle">Welcome to Damax Admin.</p>
        </div>
    </section>
    <div v-else>
        <h1 class="title">Welcome</h1>
        <p class="subtitle">Welcome to Damax Admin.</p>
    </div>
</template>
