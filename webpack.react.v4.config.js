const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

// Load environment variables from the .env file
const env = dotenv.config({ path: '.env.v4' }).parsed;

// Convert environment variables to a format compatible with DefinePlugin
const envKeys = Object.keys(env || {}).reduce((prev, next) => {
	prev[`process.env.${next}`] = JSON.stringify(env[next]);
	return prev;
}, {});

module.exports = {
	mode: 'development', // Use 'production' for production builds
	entry: './kiehls-vdb-apex-api-richcontent4/js/react-entry.js', // Entry point for React components
	plugins: [new webpack.DefinePlugin(envKeys)],
	output: {
		path: path.resolve(__dirname, 'kiehls-vdb-apex-api-richcontent4/build'),
		filename: 'react-bundle-v4.js', // Output file for React components
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
