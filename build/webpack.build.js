const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config.dev.js');
const isMinify = process.argv.indexOf('-p') !== -1;

module.exports = Object.assign({}, config, {
  mode: 'production',
  entry: {
    'main': './packages/index.js'
  },
  output: {
    path: path.join(__dirname, '../lib'),
    library: 'main',
    libraryTarget: 'umd',
    filename: isMinify ? '[name].min.js' : '[name].js',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [],
  performance: false,
  optimization: {
    minimize: isMinify
  }
});
