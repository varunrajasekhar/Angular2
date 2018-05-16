var webpack = require('webpack');
var path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './client/main.ts'),
    target: "web",
    output: {
       path: path.resolve(__dirname, './comp'),
       filename: 'app.bundle.js',
       chunkFilename: 'app.bundle.js'
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
                    //'babel-loader',
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
            }
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
        // new HTMLWebpackPlugin({
        //     title: 'Code Splitting'
        // })
    ] 
};