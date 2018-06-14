<template>
    <section v-if="$auth.check()" class="hero is-medium is-light">
        <div class="hero-body">
            <h1 class="title">{{ $t('error.header.access_denied') }}</h1>
            <p class="subtitle">{{ $t('error.message.access_denied') }}</p>
        </div>
    </section>
    <div v-else>
        <h1 class="title">{{ $t('error.header.access_denied') }}</h1>
        <p class="subtitle">{{ $t('error.message.access_denied') }}</p>
    </div>
</template>
