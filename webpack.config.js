const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// let mode = "development"
let mode = "production"

if (process.env.NODE_ENV === 'production'){
    mode = "production"
}

module.exports = {
    mode: mode,

    module: {
        rules: [
            {
                test:/\.css$/i,
                use:[MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_module/,
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot:true
    }
}