var webpack = require('webpack')
var path = require('path')
var pkg = require('./package.json')
var util = require('util')
var NODE_ENV = process.env.NODE_ENV // production, development, test
var TEST = 'test' == NODE_ENV
var DEBUG = 'development' == NODE_ENV
var PRODUCTION = 'production' == NODE_ENV

var config = {
	entry: './browser/app.js',
	output: {
		path: path.join(__dirname, 'browser'),
		filename: 'bundle.js',
		library: '_',
		libraryTarget: 'umd'
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.BannerPlugin(util.format('%s@%s by %s', pkg.name, pkg.version, pkg.author)),
		new webpack.DefinePlugin({
			VERSION: JSON.stringify(pkg.version),
			DEBUG: DEBUG
		})
	]
}

if (DEBUG) {
	config.devServer = {
		contentBase: './browser',
		host: '0.0.0.0'
	}
}

module.exports = config
