var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const path = require( 'path' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );

module.exports = {
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./client/src/js/index.js",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            }
        ]
    },
    output: {
        path: path.join( __dirname, "public","build" ),
        filename: "bundle.min.js",
        publicPath:  path.join( __dirname, "public" ),
    },
    plugins: debug ? [] : [
        new CleanWebpackPlugin( [ 'public/build' ], {
            root: process.cwd(),
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    ]
};
