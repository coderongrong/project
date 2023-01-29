const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');


module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    },
    devServer: {
        open: true,
        port: 8080,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src/index.html')
        })
    ]
}