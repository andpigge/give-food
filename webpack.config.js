// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Очищает папку dist при каждой сборке

const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  entry: { 
    main: './src/pages/index.js',
    login: './src/pages/login-page/login.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 80,
    open: true 
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        }, 
        'postcss-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './src/pages/login-page/login.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ]
}
