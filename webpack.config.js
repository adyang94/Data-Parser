const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/dataParsing.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
