const HtmlWebpackPlugin = require("html-webpack-plugin");
const patch = require ('path');


module.exports = {
    entry: './src/app/index.js',
    output: {
        path: patch.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000
    },
    module:{
        rules: [
            {
                test:/\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    
    ]
    
};