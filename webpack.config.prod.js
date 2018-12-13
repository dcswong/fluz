var webpack = require('webpack');
var path = require('path');


// setup evir
var MODE = process.argv.filter(a => /^-p$/i.test(a)).length ? 'production' : 'development';

// dev_dir is used for storing development codes.
var DEV_DIR = path.resolve(__dirname, 'src');

// prod_dir is used for storing compiled production codes.
var PROD_DIR = path.resolve(__dirname, 'public/assets/js');


var config = {
  entry: DEV_DIR + '/index.js',
  output: {
    path: PROD_DIR,
    filename: 'index.js',
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : DEV_DIR,
        loader : 'babel-loader'
      },
      {
        test:   /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(MODE),
        'APPID'               : JSON.stringify({
          production  : '204127556840202',
          development : '211194296170144'
        }[MODE]),
        'AEP'                 : JSON.stringify({
          production  : "https://api.oneshop.cloud",
          development : "https://api.shop.ocs.zone"
        }[MODE])
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ]
};

module.exports = config;