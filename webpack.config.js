var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: ['babel-polyfill', './marquee.jsx'],
  resolve: {
    modules :[
      path.resolve('./src'),
      path.resolve('./node_modules')
    ],
    extensions: ['.js', '.jsx', '.json']
  },
  output: {
    path: __dirname + '/lib',
    filename: 'index.js'
  },
  plugins: [
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
    })
  ],
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
