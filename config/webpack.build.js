

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'index.cjs.js',
    libraryTarget: 'commonjs'
  }
};
