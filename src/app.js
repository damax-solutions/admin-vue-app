import Vue from 'vue'

import store from './store'
import router from './router'
import i18n from './translations'
import { nprogress } from './bootstrap'

import App from './App'

new Vue({
    store, router, i18n, nprogress,

    el: '#app',

    render: h => h(App)
})
