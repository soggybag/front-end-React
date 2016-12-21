const path = require("path");
const config = require("./package.json");
const webpack = require("webpack");

module.exports = {
    entry: path.resolve(__dirname, config.main), // entry file to all our js modules
    devtool: "source-map", // add source mapping
    output: {
        path: __dirname, // path to output files
        filename: '/build/bundle.js'
    },
    module: {
        preLoaders: [{
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                include: __dirname + '/'
            }
        ],
        loaders: [
        // css and less loaders
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
        },
            {
                test: /\.coffee$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'coffee-loader'
      }
    ]
    },
    plugins: [
    new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
        ]
}