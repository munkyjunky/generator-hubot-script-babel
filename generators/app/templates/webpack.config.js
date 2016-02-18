'use strict';

module.exports = {

	entry: './src/index.js',

	output: {
		path: 'dist',
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	},

	target: 'node',

	module: {
		loaders: [
			{test: /\.coffee$/, loader: 'coffee-loader'},
			{
				test: /\.js/,
				loader: 'babel',
				exclude: /node_modules/
			}
		]
	}

};
