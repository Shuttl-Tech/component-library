// Configuration for library package generation

const path = require('path');

module.exports = {
	entry: './src/index.package.js',
	output: {
		path: __dirname + '/',
		publicPath: '/',
		filename: 'index.package.generated.js',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[sha512:hash:base32:5]-[local]'
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		alias: {
			'react': path.resolve(__dirname, './node_modules/react'),
			'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
		},
		modules: [
			'src',
			'node_modules'
		]
	},
	externals: {
		'react': 'react',
		'react-dom': 'react-dom'
	}
};
