import { modules } from '../config'

const collect = (filters, module) => {
    try {
        return Object.assign({}, filters, require('../modules/' + module + '/filters'))
    } catch (e) {
        return filters
    }
}

export default modules.reduce(collect, {})
