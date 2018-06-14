import Vue from 'vue'
import VueI18n from 'vue-i18n'
import merge from 'deepmerge'

import { locales, modules, locale } from '../config'

const collect = (catalogue, locale) => {
    // Default translations.
    try {
        catalogue[locale] = require('./' + locale)
    } catch (e) {
        catalogue[locale] = {}
    }

    // Module translations.
    modules.forEach(module => {
        try {
            const data = require('modules/' + module + '/translations/' + locale)

            catalogue[locale] = merge(catalogue[locale], data)
        } catch (e) {
            // No defined.
        }
    })

    return catalogue
}

const messages = locales.reduce(collect, {})

Vue.use(VueI18n)

export default new VueI18n({ messages, locale })
