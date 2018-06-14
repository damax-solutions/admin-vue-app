/**
 * Temporary (?) workaround for expired token problem.
 */
const install = function (Vue) {
    Vue.axios.interceptors.response.use(response => response, error => {
        const { response } = error

        // Expired token.
        if (response.status === 403) {
            localStorage.removeItem('token')
            document.location.href = '/login'
        }

        return Promise.reject(error)
    })
}

export default [{ install }]
