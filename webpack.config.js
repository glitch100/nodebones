const webpack = require('webpack');

module.exports = {
	entry: {
		main: './js/main.js'
	},
	output: {
		path: 'public',
		filename: 'app.js'
	},
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          optional: ['runtime']
        }
      }
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  }
}