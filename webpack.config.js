const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPludin =  require('eslint-webpack-plugin');

let mode = "development";

if (process.env.NODE_ENV === "poduction") {
    mode = "production";  
}

module.exports = {
    mode: mode,

    module: {
      rules: [
        {
            test: /\.s?css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        },
    ],
},

    plugins: [new MiniCssExtractPlugin(), new ESLintPludin()],

    devtool: "source-map",
    devServer: {
        static: "./dist",
        hot: true,
    }
}