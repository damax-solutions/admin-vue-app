const os = require('os')
const { resolve } = require('path')

const history = require('connect-history-api-fallback')
const convert = require('koa-connect')

// Plugins
const webpackServeWaitPage = require('webpack-serve-waitpage')

const host = os.networkInterfaces().eth0[0]['address']

module.exports = {
    host,

    clipboard: false,
    content: resolve(__dirname, 'build'),

    hot: {
        host: { server: host, client: 'localhost' }
    },

    add (app, middleware, options) {
        app.use(webpackServeWaitPage(options))
        app.use(convert(history()))

        // middleware.webpack()
        // middleware.content()
    }
}
