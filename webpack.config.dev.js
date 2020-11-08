const baseConfig = require('./webpack.config.base')
const { HotModuleReplacementPlugin } = require('webpack')

const devConfig = {
	mode: 'development',
	devtool: "inline-source-map",
	devServer: {
		contentBase: './dist',
		hot: true,
		hotOnly: true,
		open: true
	}
}

baseConfig.plugins.push(new HotModuleReplacementPlugin())

function mergeConfig() {
	const config = {}
	Object.assign(config, ...arguments)
	return config
}

module.exports = mergeConfig(devConfig, baseConfig)