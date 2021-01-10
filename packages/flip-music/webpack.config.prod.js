const baseConfig = require('./webpack.config.base')

const prodConfig = {
  mode: 'production',
}

function mergeConfig() {
  const config = {}
  Object.assign(config, ...arguments)
  return config
}

module.exports = mergeConfig(prodConfig, baseConfig)