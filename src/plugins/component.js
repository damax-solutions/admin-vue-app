import vueLoading from 'vue-loading-template'

import { PaginationSummary, Pagination } from '../components'

export default Vue => {
    Vue.component('vue-loading', vueLoading)
    Vue.component('pagination-summary', PaginationSummary)
    Vue.component('pagination', Pagination)
}
