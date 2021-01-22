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
    mode: 'production',
     // Don't attempt to continue if there are any errors.
    bail: true,
    devtool: 'source-map',
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