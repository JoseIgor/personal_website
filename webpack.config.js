const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin(), // trackes unused files in the distribution folder and removes them
    //automatically replace the new genereted bundle in the index.html output
    new HtmlWebpackPlugin({ template: 'src/assets/index.html' })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join('/dist/'),
    inline: true,
    host: '0.0.0.0',
    port: 3000
  }
};
