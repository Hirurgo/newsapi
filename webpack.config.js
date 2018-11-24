const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isProd = env => env === 'production';

module.exports = env => ({
  mode: env,
  entry: {
    welcome: './src/WelcomePage/script.js',
    news: './src/NewsPage/js/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/i,
        loader: 'url-loader'
      }
    ]
  },
  devtool: isProd(env) ? undefined : 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    stats: 'errors-only',
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/WelcomePage/index.html',
      chunks: ['welcome'],
      minify: isProd(env)
    }),
    new HtmlWebpackPlugin({
      filename: 'news.html',
      template: './src/NewsPage/index.html',
      chunks: ['news'],
      minify: isProd(env)
    })
  ]
});
