var webpack = require('webpack');

module.exports = {
    entry:{
        index:'./src/index.js'
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
                loader: "style-loader!css-loader"
            }
        ]

    }
};