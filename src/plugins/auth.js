/**
 * Placeholder for '@websanova/vue-auth' plugin.
 */
export default Vue => {
    Vue.prototype.$auth = {
        check () {
            return false
        },

        ready () {
            return true
        }
    }
}
