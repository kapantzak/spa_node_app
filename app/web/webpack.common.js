const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
//const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");

module.exports = {    
    entry: "./src/ts/index",    
    output: {
        filename: "bundle.js",
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/"        
    },
    plugins: [
        new CleanWebpackPlugin(),
        //new CompressionPlugin(),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            jquery: "jquery",
            Promise: "es6-promise"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: "/node_modules/"
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".ts",".js"]
    }
};