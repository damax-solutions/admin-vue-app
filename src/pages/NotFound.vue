<template>
    <section v-if="$auth.check()" class="hero is-medium is-light">
        <div class="hero-body">
            <h1 class="title">{{ $t('error.header.page_not_found') }}</h1>
            <p class="subtitle">{{ $t('error.message.page_not_found') }}</p>
        </div>
    </section>
    <div v-else>
        <h1 class="title">{{ $t('error.header.page_not_found') }}</h1>
        <p class="subtitle">{{ $t('error.message.page_not_found') }}</p>
    </div>
</template>
