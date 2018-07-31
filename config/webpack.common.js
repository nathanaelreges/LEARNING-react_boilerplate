module.exports = {
   entry: './src/index.jsx',
   output: {
      filename: 'bundle.js',
      path: __dirname + '/.././dist'
   },
   module: {
      rules: [{
         test: /.jsx?$/,
         exclude: /node_modules/,
         use: [{
            loader: 'babel-loader',
            options: {
               presets: ['react'],
               plugins: ['transform-object-rest-spread']
            }
         }]
      }] 
   },
   resolve: {
      extensions: ['.js', '.jsx']
   }
}