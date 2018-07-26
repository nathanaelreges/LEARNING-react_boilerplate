const merge = require('webpack-merge')
const common  = require('./webpack.common.js')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const webpack = require("webpack")

module.exports = merge(common, {
   mode: 'production',
   optimization: {
      minimizer: [
        new UglifyJsPlugin() //WebPack uses it by default, but lets leave it heare
      ],
   },
   plugins: [
      new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify('production')
      })
   ]
})