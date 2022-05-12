const webpack = require('webpack');
const path = require('path');
var config = {
    entry: './index.js',

    output: {
        path: path.join(__dirname, '/frontendprojetoiberia'),
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 9261
    },
    resolveLoader: {
        modules: [path.join(__dirname, 'node_modules')]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
}

module.exports = config;