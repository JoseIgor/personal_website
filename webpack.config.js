const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(), // trackes unused files in the distribution folder and removes them
    //automatically replace the new genereted bundle in the index.html output
    new HtmlWebpackPlugin({ template: 'src/assets/index.html' })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    inline: true,
    host: '0.0.0.0',
    port: 3000
  }
};
