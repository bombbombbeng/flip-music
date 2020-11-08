const baseConfig = require('./webpack.config.base')

const devConfig = {
	mode: 'development',
	devtool: "inline-source-map",
	devServer: {
		contentBase: './dist',
		hot: true,
		open: true
	}
}

function mergeConfig() {
	const config = {}
	Object.assign(config, ...arguments)
	return config
}

module.exports = mergeConfig(devConfig, baseConfig)