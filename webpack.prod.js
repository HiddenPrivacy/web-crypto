var libraryName = 'webcrypto';
var outputFile = 'web-crypto.js';

module.exports = {
  mode: 'production',
  entry: {
    "bundle": [ __dirname + '/src/index.js' ]
  },
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
