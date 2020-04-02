const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modelus/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }]
            },
            {
                test: /\.(s[ca]ss)$/,
                use: [

                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },

                    {
                        loader: "sass-loader"
                    }]
            },
            {
                test: /\.(jpg|png)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: "images",
                        name: '[name]-[sha1:hash:7].[ext]'
                    }
                }
                ]
            },
            {
                test: /\.(ttf|otf|eot)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: "fonts",
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ]

};