const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {
    paths,
    entry,
    output,
    resolve,
    eslintRules,
    babelLoader
} = require('./config')

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: paths.appBuild,
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    entry: entry(paths),
    output: output(paths),
    resolve: resolve(paths, { '@': paths.appSrc }),
    module: {
        strictExportPresence: true,
        rules: [
            eslintRules(paths),
            {
                oneOf: [
                    babelLoader(paths),
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: paths.appHtml
        }),
    ]
}