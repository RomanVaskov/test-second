const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}

module.exports = {
    externals: {
        paths: PATHS
    },
    entry: PATHS.src,
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist
    },
    plugins: [
        new HTMLPlugin({
            hash: false,
            filename: './index.html',
            template: `${PATHS.src}/index.html`
        }),
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: `${PATHS.src}/favicon`,
                to: `${PATHS.assets}favicon`
            }
        ])
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
            test: /\.(js|ts)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: {
                loader: 'file-loader',
                options: {
                    outputPath: `${PATHS.assets}img`,
                    publicPath: "../img/",
                    name: "[name].[ext]"
                }
            },
        },
        {
            test: /\.woff$|\.woff2?$|\.ttf$|\.eot$|\.otf$/,
            use: {
                loader: 'file-loader',
                options: {
                    outputPath: `${PATHS.assets}fonts`,
                    publicPath: "../fonts/",
                    name: "[name].[ext]"
                }
            },
        }
        ]
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})]
    },
    resolve: {
        extensions: ['.js', '.ts']
    }
}