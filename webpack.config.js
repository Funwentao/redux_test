const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:{
        index:'./src/index.js',
        vendor:['react','react-dom']
    },
    output:{
        filename:'[name].js',
        path: __dirname+"/dist"
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]

    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.optimize.CommonsChunkPlugin({name:'vendor',filename:'vendor.bundle.js'}),
        new HtmlWebpackPlugin({
            title: 'redux',
            filename: '../index.html',
            template: './template.html',
            chunks:['index','vendor']
        }),
        new ExtractTextPlugin("styles.css")
    ]
};