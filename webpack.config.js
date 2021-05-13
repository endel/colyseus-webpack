const path = require('path');
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
    ],

    output: {
        filename: "server-built.js",
        path: path.resolve(__dirname, "dist"),
    },
};
