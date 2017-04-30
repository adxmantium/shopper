var path = require('path');
var webpack = require('webpack');
var visualizer = require('webpack-visualizer-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './src/index.js'
    ],

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "shopper_bundle.js",
        sourceMapFilename: "shopper_bundle.map"
    },

    devtool: '#source-map', 

    module: {
        rules: [

            // resolve .css files using css-loader and style-loader modules
            {
                test: /\.scss$/, 
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            // use babel-loader to resolve any js files
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',
            },

            {
                test: /\.(png|svg|jpeg|jpg|gif)/,
                use: [
                    'file-loader?name=images/[name].[ext]', // does the same as above line, if ouputPath and publicPath are same
                    'image-webpack-loader' // optimizes images before being saved to to images folder
                ]
            },
        ]
    },

    devServer: {
        contentBase: path.resolve(__dirname), // tells server where to serve content from
        compress: true, // enables gzip compression
        port: 8080, // customize port number
        stats: 'errors-only', // only shows error to console
        open: true, // opens app in new window on server start
        hot: true, // enables hot module replacement
    },

    plugins: [
        new visualizer(),
        new DashboardPlugin(),
        new webpack.HotModuleReplacementPlugin(), // enable HMR globally
        new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
    ],
}