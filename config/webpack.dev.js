const merge = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
  devServer: {
    compress: true,
    clientLogLevel: 'none',
    port: 8888
  }
});
