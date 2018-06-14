const { resolve } = require('path')

const history = require('connect-history-api-fallback')
const convert = require('koa-connect')

// Plugins
const webpackServeWaitpage = require('webpack-serve-waitpage')

module.exports = {
    clipboard: false,
    host: '0.0.0.0',
    content: resolve(__dirname, 'build'),

    add: (app, middleware, options) => {
        app.use(webpackServeWaitpage(options))
        app.use(convert(history()))

        // middleware.webpack()
        // middleware.content()
    }
}
