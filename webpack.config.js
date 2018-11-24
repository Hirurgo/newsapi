const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isProd = env => env === 'production';

module.exports = env => ({
  mode: env,
  entry: {
    main: './src/js/index.js'
  },
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js',
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
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    stats: 'errors-only',
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: isProd(env)
    })
  ]
});
