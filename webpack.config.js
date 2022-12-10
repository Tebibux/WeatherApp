const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
        mode: 'development',
        entry: './src/index.js',
        output: {
                filename: 'bundle.js',
                path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
                new HtmlWebpackPlugin({
                        title: 'Weather',
                        filename: 'index.html',
                        template: 'src/template.html',
                }),
        ],
        module: {
                rules: [
                        {
                                test: /\.css$/i,
                                use: ['style-loader', 'css-loader'],
                        },
                        {
                                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                                type: 'asset/resource',
                        },
                ],
        },
};