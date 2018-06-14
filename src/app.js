import Vue from 'vue'
import NProgress from 'vue-nprogress'

import vueLoading from 'vue-loading-template'

import store from './store'
import router from './router'
import i18n from './translations'
import * as plugins from './plugins'
import filters from './filters'

Vue.router = router

import { PaginationSummary, Pagination } from './components'
import App from './App'

// Plugins
Object.values(plugins).forEach(args => Vue.use(...args))
Vue.use(NProgress, { router: true, http: false })

// Filters
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

// Components
Vue.component('vue-loading', vueLoading)
Vue.component('pagination-summary', PaginationSummary)
Vue.component('pagination', Pagination)

const nprogress = new NProgress({ parent: '.nprogress-container' })

new Vue({
    el: '#app',

    store, router, i18n, nprogress,

    render: h => h(App)
})
