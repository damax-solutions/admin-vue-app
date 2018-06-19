import Buefy from 'buefy'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'

export Notifications from 'vue-notification'
export Vue2Filters from 'vue2-filters'

import http from '../http'

export const buefy = [Buefy, { defaultIconPack: 'fas' }]
export const axios = [VueAxios, http]
export const swal = [VueSweetalert2]

export auth from './auth'
export component from './component'
export filter from './filter'
export moment from './moment'
export validate from './validate'
