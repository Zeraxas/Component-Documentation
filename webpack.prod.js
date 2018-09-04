const merge = require('webpack-merge')
const common = require('./webpack.common.js')

// Extract CSS from JS file and create separe CSS file
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                        ]
                })
            }
        ]
    },
    plugins: [
        // Here we define name of CSS file
        new ExtractTextPlugin('css/style.css')
    ]
})