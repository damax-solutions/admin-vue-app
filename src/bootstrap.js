import Vue from 'vue'
import NProgress from 'vue-nprogress'

import { modules } from './config'
import router from './router'

// Required by auth plugin.
Vue.router = router

const registerPlugins = plugins => {
    Object.entries(plugins).forEach(([name, plugin]) => {
        if (Array.isArray(plugin)) {
            Vue.use(...plugin)
        } else if (typeof plugin === 'function') {
            Vue.use({ install: plugin })
        } else {
            Vue.use(plugin)
        }
    })
}

registerPlugins(require('./plugins'))

modules.forEach(module => {
    try {
        registerPlugins(require('modules/' + module + '/plugins'))
    } catch (e) {
        // No plugins.
    }
})

Vue.use(NProgress, { router: true, http: false })

export const nprogress = new NProgress({ parent: '.nprogress-container' })
