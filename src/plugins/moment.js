import moment from 'moment'
import VueMoment from 'vue-moment'

import { locale, locales } from '../config'

locales.forEach(locale => {
    try {
        require('moment/locale/' + locale)
    } catch (e) {
        // Locale not found.
    }
})

moment.locale(locale)

export default [VueMoment, { moment }]
