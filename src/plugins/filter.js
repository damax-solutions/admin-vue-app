import { modules } from '../config'

const register = (Vue, filters) => {
    for (const [name, filter] of Object.entries(filters)) {
        Vue.filter(name, filter)
    }
}

export default Vue => {
    register(Vue, require('../filters'))

    modules.forEach(module => {
        try {
            register(Vue, require('modules/' + module + '/filters'))
        } catch (e) {
            // No filters.
        }
    })
}
