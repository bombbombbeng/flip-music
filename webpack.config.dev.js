const baseConfig = require('./webpack.config.base')
const { HotModuleReplacementPlugin } = require('webpack')

const devConfig = {
	mode: 'development',
	devtool: "inline-source-map",
	devServer: {
		contentBase: './dist',
		hot: true,
		hotOnly: true,
		open: true,
		proxy: [
			{
				context: ['/wy'],
				target: 'https://music.163.com/weapi/',
				pathRewrite: {'^/wy': ''},
				changeOrigin: true
			},
      {
        context: ['/tx'],
        target: 'https://c.y.qq.com/',
        pathRewrite: {'^/tx': ''},
        changeOrigin: true
      },
      {
        context: ['/kg'],
        target: 'http://ioscdn.kugou.com/',
        pathRewrite: {'^/kg': ''},
        secure: false,
        changeOrigin: true
      },
      {
        context: ['/kw'],
        target: 'http://search.kuwo.cn/',
        pathRewrite: {'^/kw': ''},
        secure: false,
        changeOrigin: true
      }
		]
	}
}

baseConfig.plugins.push(new HotModuleReplacementPlugin())

function mergeConfig() {
	const config = {}
	Object.assign(config, ...arguments)
	return config
}

module.exports = mergeConfig(devConfig, baseConfig)