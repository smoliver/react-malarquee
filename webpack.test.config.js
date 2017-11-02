var webpack = require('webpack');
var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');

process.traceDeprecation = true;

module.exports = {
  context: __dirname + '/test/src',
  entry: './index.js',
  resolve: {
    modules: [
      path.resolve('./test/src'),
      path.resolve('./src'),
      path.resolve('./node_modules')
    ],
    extensions: ['.js', '.jsx', '.json']
  },
  output: {
    path: __dirname + '/test/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new BundleTracker ({ filename: './webpack-stats.json', indent: 2 })
  ],
  devtool: "#source-map",
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: path.resolve('./node_modules'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-0'],
          plugins: ['transform-object-assign']
        }
      }]
    }, {
      test: /\.(png|jpg|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      }]
    }, {
      test: /\.(ttf|otf|eot|woff|woff2)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }]
    }, {
      test: /\.scss$/,
      use: [
        "style-loader", 
        { 
          loader: "css-loader",
          options: {
            importLoaders: 2,
            modules: true,
            localIdentName: '[path]--[local]'
          }
        }, 
        "postcss-loader",
        "sass-loader"
      ]
    }]
  }
}

