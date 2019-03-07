var webpack = require('webpack');
var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './client/main.ts'),
    target: "web",
    output: {
       path: path.resolve(__dirname, './comp'),
       publicPath: 'http://localhost:8080/',
       filename: 'app.bundle.js',
       chunkFilename: 'app.bundle.js'
    },
    devServer: {
        port: 8080,
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'string-replace-loader',
                        options: {
                            search: 'System.import',
                            replace: 'import'
                        }
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            silent: true,
                            compilerOptions: {
                                noEmit: false
                            }
                        }
                    }
                ]
            },
            { test: /\.html$/, loader: "html-loader" }
        ]
    },
    resolve: {
        extensions: ['*','.js', '.ts']
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
        /(angular|core|@angular)/,
        path.resolve(__dirname, './client')
        ),
        new HTMLWebpackPlugin({
            entry: 'client/index.html',
            template: 'client/index.html'
        })
    ] 
};