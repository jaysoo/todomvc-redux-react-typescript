var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require("./make-webpack-config")({
  development: true,
  // Set to true to enable redux dev panel.
  devPanel: false,
  devtool: "eval",
  debug: true
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  colors: true,
  progress: true,
  hot: true,
  historyApiFallback: true
}).listen(2992, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:2992');
});