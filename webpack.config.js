const webpack = require('webpack')
const path = require('path')

// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const WebpackChunkHash = require('webpack-chunk-hash')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const devMode = process.env.NODE_ENV !== 'production'

const sassOptions = {
    includePaths: [
        path.resolve(__dirname, 'node_modules')
    ]
}

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        app: [
            'babel-polyfill',
            './src/app.js',
            './src/app.scss'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        alias: {
            '~': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [

            // Javascript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },

            // Vue
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },

            // CSS
            {
                test: /\.s?css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader', options: sassOptions }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            title: 'Damax Admin'
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: 'https://use.fontawesome.com/releases/v5.0.10/css/all.css',
            append: false,
            publicPath: ''
        }),
        new CleanWebpackPlugin('build'),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
            chunkFilename: '[name].[chunkhash].css'
        }),
        new WebpackChunkHash({ algorithm: 'md5' }),
        new VueLoaderPlugin(),
        new webpack.EnvironmentPlugin(require('dotenv').config().parsed)
    ],
    optimization: {
        splitChunks: {
            chunks: 'async'
        },
        minimizer: [
            new UglifyJsPlugin({ cache: true, parallel: true }),
            new OptimizeCSSAssetsPlugin()
        ]
    }
}
