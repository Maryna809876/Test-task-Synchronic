const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'development',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },

    devServer: {
        static: './dist',
        open: true,
        hot: true,
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            // {
            //     test: /\.(png|jpg|jpeg|gif|svg)$/i,
            //     type: 'asset/resource',
            //     // generator: {
            //     //     filename: 'images/[name][ext]',
            //     // },
            // },

        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/img',
                    to: 'img',
                },
            ],
        }),
    ],
};
