const path = require('path');

module.exports = {
  mode: 'development',  
  entry: {
    index: './index.js',
    create: './createElement.js',
    images: './images.js',
    menu: './menu.js',
    info: './businessInfo.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  
};
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: {
//     index: './src/index.js',
//     print: './src/print.js',
//   },
//   devtool: 'inline-source-map',
//   devServer: {
//     static: './dist',
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Development',
//     }),
//   ],
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//     publicPath: '/',
//   },
// };