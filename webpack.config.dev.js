import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';

const path = require('path');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
  __DEV__: true
};

export default {
  resolve: {
    root: [
      path.resolve(__dirname, './src'),
    ],
    extensions: ['', '.js', '.jsx'],
  },
  debug: true,
  devtool: 'cheap-module-eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  noInfo: true, // set to false to see a list of every file being bundled.
  entry: [
    // must be first entry to properly set public path
    './src/app/core/webpack-public-path',
    'webpack-hot-middleware/client?reload=true',
    './src/app/index'
  ],
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: `${__dirname}/dist`, // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Tells React to build in in either dev or prod mode. https://facebook.github.io/react/downloads.html (see bottom)
    new webpack.DefinePlugin(GLOBALS),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoErrorsPlugin(),

    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: './src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    })
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]'},
      {test: /\.ico$/, loader: 'file?name=[name].[ext]'},
      {
        test: /(\.css|\.scss)$/,
        exclude: [
          /node_modules/,
          path.resolve(__dirname, './src/app/styles')
        ],
        loaders: [
          'style?sourceMap',
          'css?modules&localIdentName=[path]__[name]__[local]__[hash:base64:5]',
          'postcss',
          'sass?sourceMap'
        ],
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, './src/app/styles')
        ],
        loaders: [
          'style',
          'css?sourceMap',
          'postcss',
          'sass?sourceMap'
        ],
      },
    ]
  },
  postcss: () => [autoprefixer]
};
