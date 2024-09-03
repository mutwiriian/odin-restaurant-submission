const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { watchFile } = require('fs')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'eval-source-map',
    devServer: {
        watchFiles: ['./src/index.html']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
        clean: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },

            {
                test: /\.html$/i,
                loader: 'html-loader'
            },

            {
                test: /\.(avif)$/i,
                type: 'asset/resource'
            }
        ]
    }


}