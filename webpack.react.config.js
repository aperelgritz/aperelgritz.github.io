const path = require('path');

module.exports = {
	mode: 'development', // Use 'production' for production builds
	entry: './kiehls-vdb-apex-api/js/react-entry.js', // Entry point for React components
	output: {
		path: path.resolve(__dirname, 'kiehls-vdb-apex-api/build'),
		filename: 'react-bundle.js', // Output file for React components
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};
