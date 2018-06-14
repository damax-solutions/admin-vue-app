import VeeValidate from 'vee-validate'

import { locale, locales } from '../config'

const collect = (dictionary, locale) => {
    try {
        return Object.assign({}, dictionary, { [locale]: require('vee-validate/dist/locale/' + locale) })
    } catch (e) {
        return dictionary
    }
}

const dictionary = locales.reduce(collect, {})

export default [VeeValidate, { locale, dictionary }]
