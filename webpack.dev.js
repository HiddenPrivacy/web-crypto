const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.prod.js');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    minimize: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject:true,
      filename: './demo/index.html',
      alwaysWriteToDisk: false
    })
  ],
  devServer: {
    publicPath: '/',
    contentBase: [
      path.join(__dirname + '/demo'),
      path.join(__dirname + '/lib')
    ],
    contentBasePublicPath: '/',
    watchOptions: {
      ignored: /node_modules/
    },
    port: 3002,
    //host: '10.0.0.107',
    //https: true,
    hot: true,
    open: true,
    inline: true,    
    watchContentBase: true,
    liveReload: false
  }  
});
