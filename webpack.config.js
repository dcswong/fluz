var webpack = require('webpack');
var path    = require('path');


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
  devServer: {
    historyApiFallback  : true,
    contentBase         : path.resolve(__dirname, 'public'),
    publicPath          : "/assets/js/",
    inline              : true,
    port                : 9002,
    host                : "0.0.0.0"
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify("local"),
      'APPID'               : '233151707486931',
      'AEP'                 : JSON.stringify("http://localhost:3001")
    }),
  ]
};

module.exports = config;
