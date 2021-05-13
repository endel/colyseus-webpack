const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = {
    mode: "development",
    target: "node",

    devtool: "inline-source-map",
    entry: "./src/index.ts",

    resolve: {
        symlinks: false,
        extensions: [".ts", ".js"],
    },

    cache: false,

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    // disable type checker - we will use it in fork plugin
                    transpileOnly: true,
                },
            },
        ],
    },

    watchOptions: {
        ignored: /node_modules/,
    },

    plugins: [
        new CleanWebpackPlugin(),

        // Fix optional dependency
        new webpack.IgnorePlugin({
            resourceRegExp: /^hiredis$/,
        }),

        // Fix LICENSE files being included by default-gateway module
        new webpack.IgnorePlugin({
            resourceRegExp: /^(.*)LICENSE$/i,
        }),

        // Fix markdown files being included by default-gateway module
        new webpack.IgnorePlugin({
            resourceRegExp: /^(.+).md$/i,
        }),
    ],

    output: {
        filename: "server-built.js",
        path: path.resolve(__dirname, "dist"),
    },
};
