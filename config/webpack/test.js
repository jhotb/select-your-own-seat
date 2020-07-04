process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')
const path = require('path')
const ConfigObject = require('@rails/webpacker/package/config_types/config_object')

const webConfig = environment.toWebpackConfig()
const ssrConfig = new ConfigObject(webConfig.toObject())

ssrConfig.delete('entry')
ssrConfig.merge({
  entry: {
    server_rendering: webConfig.entry.server_rendering
  },
  resolve: {
    alias: {
      'html-dom-parser': path.resolve(__dirname, '../../node_modules/html-dom-parser/lib/html-to-dom-server')
    }
  }
})

delete webConfig.entry.server_rendering

module.exports = [ssrConfig, webConfig]
