var path = require("path");

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },
    module: {
        rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
    },
    devServer: {
        static: './dist',
    }
};