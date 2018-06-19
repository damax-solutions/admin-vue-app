import Buefy from 'buefy'
import VueAxios from 'vue-axios'

export Notifications from 'vue-notification'
export Vue2Filters from 'vue2-filters'
export VueSweetalert2 from 'vue-sweetalert2'

import http from '../http'

export const buefy = [Buefy, { defaultIconPack: 'fas' }]
export const axios = [VueAxios, http]

export componet from './component'
export filter from './filter'
export moment from './moment'
export validate from './validate'
