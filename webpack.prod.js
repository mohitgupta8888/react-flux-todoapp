const path = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "template/static")
      }
    ])
  ]
});