/**
 * Created by meng on 2016/9/29.
 */
import path from 'path';
import webpack from 'webpack';

export default {
	devtools: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, '/client/index.js')
	],
	output: {
		path: '/',
		publicPath: '/'
	},
	plugins: [
		// Webpack 1.0
		new webpack.optimize.OccurenceOrderPlugin(),
		// Webpack 2.0 fixed this mispelling
		// new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	],
	module: {
		loaders: [{
			test: /\.js$/,
			include: [
				path.join(__dirname, 'client'),
				path.join(__dirname, 'server/shared')
			],
			loaders: ['react-hot', 'babel']
		}]
	},
	resole: {
		extensions: ['', '.js', ],
	}
}