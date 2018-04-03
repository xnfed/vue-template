'use strict'
// Template version: 1.2.8
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const vfly = require('./vfly.config')
module.exports = {
  start: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: vfly.static.start,
    proxyTable: {
      '/api': {
        target: vfly.globals.api,
        changeOrigin: true
      }
    },

    // Various Dev Server settings
    host: vfly.host, // can be overwritten by process.env.HOST
    port: vfly.port, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: vfly.eslint,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */
    productionSourceMap: vfly.devtool.dev,
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  dev: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/dev/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist/dev'),
    assetsSubStatic: 'static',
    assetsSubDirectory: '',
    assetsPublicPath: vfly.static.dev + 'dev',

    /**
     * Source Maps
     */

    productionSourceMap: vfly.devtool.dev,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',
    cacheBusting: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/prod/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist/prod'),
    assetsSubStatic: 'static',
    assetsSubDirectory: '',
    assetsPublicPath: vfly.static.prod + 'prod',
    /**
     * Source Maps
     */

    productionSourceMap: vfly.devtool.prod,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
