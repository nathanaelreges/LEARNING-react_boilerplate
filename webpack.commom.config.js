const webpack = require('webpack')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
   entry: './src/index.jsx',
   output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
   },
   mode: 'production',
   optimization: {
      minimizer: [
        new UglifyJsPlugin()
      ],
   },
   module: {
      rules: [{
         test: /.jsx?$/,
         exclude: /node_modules/,
         use: [{
            loader: 'babel-loader',
            options: {
               presets: ['react']
            }
         }]
      }] 
   },
   plugins: [
      new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify('production')
      })
   ]
}