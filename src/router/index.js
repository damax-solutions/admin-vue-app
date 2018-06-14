import Vue from 'vue'
import Router from 'vue-router'

import { NotFound, AccessDenied, Default } from '../pages'

import { modules } from '../config'

const generateRoutesFromMenu = (items, routes = []) => {
    for (const item of items) {
        if (item.path) {
            routes.push(Object.assign({}, item, { children: [] }))
        }

        if (item.children) {
            generateRoutesFromMenu(item.children, routes)
        }
    }

    return routes
}

const collect = (routes, module) => {
    const menu = require('../modules/' + module + '/router')

    return routes.concat(menu.default)
}

export const menu = modules.reduce(collect, [])

const routes = [
    {
        name: 'default',
        path: '/',
        component: Default,
        meta: {
            label: 'nav.dashboard',
            auth: true
        }
    },
    { path: '*', component: NotFound },
    { path: '/access-denied', component: AccessDenied },

    ...generateRoutesFromMenu(menu)
]

Vue.use(Router)

export default new Router({
    routes,
    linkActiveClass: 'is-active',
    mode: 'history'
})
