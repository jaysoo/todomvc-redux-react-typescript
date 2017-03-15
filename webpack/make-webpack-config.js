var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StatsPlugin = require("stats-webpack-plugin");
var loadersByExtension = require("../config/loadersByExtension");
const fs = require('fs');

module.exports = function (options) {
  var entry;

  if (options.development) {
    entry = {
      todos: [
        'webpack-dev-server/client?http://0.0.0.0:2992',
        'webpack/hot/only-dev-server',
        './client/index'
      ]
    };
  } else {
    entry = {
      todos: './client/index'
    }
  }

  var loaders = {
    "js": {
      loaders: options.development ? ["react-hot", "babel-loader"] : ["babel-loader"],
      include: path.join(__dirname, "..", "client")
    },
    "ts|tsx": {
      loaders: ['react-hot', 'ts-loader']
    }
  };

  var stylesheetLoaders = {
    "css": 'css-loader'
  };

  var publicPath = options.development
    ? "http://localhost:2992/_assets/"
    : "/_assets/";
  
  if (options.development) {
    var plugins = [
      new webpack.PrefetchPlugin("react"),
      {
        apply: function (compiler) {
          compiler.plugin('after-emit', function (compilation, done) {
            var stats = compilation.getStats().toJson({
              // node_modules/webpack/lib/Stats.js
              hash: true,
              version: true,
              timings: false,
              assets: true,
              chunks: false,
              chunkModules: false,
              chunkOrigins: false,
              modules: false,
              cached: false,
              reasons: false,
              children: false,
              source: false,
              errors: false,
              errorDetails: false,
              warnings: false,
              publicPath: true,
            });
            delete stats.assets;
            fs.writeFile('build/stats-dev.json', JSON.stringify(stats), done);
          });
        }
      }
    ];
  } else {
    var plugins = [
      new webpack.PrefetchPlugin("react"),
      new StatsPlugin("../stats.json", {
        chunkModules: true,
        exclude: [/node_modules[\\\/]react/]
      })
    ];
  }


  Object.keys(stylesheetLoaders).forEach(function (ext) {
    var stylesheetLoader = stylesheetLoaders[ext];
    if (Array.isArray(stylesheetLoader)) stylesheetLoader = stylesheetLoader.join("!");
    if (options.separateStylesheet) {
      stylesheetLoaders[ext] = ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: stylesheetLoader });
    } else {
      stylesheetLoaders[ext] = "style-loader!" + stylesheetLoader;
    }
  });

  if (options.separateStylesheet) {
    plugins = plugins.concat([
      new ExtractTextPlugin({ filename: 'css/[name].css', allChunks: true })
    ]);
  }

  if (options.minimize) {
    plugins = plugins.concat([
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      })
    ]);
  }

  if (options.development) {
    plugins = plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        __DEVELOPMENT__: true,
        __DEVPANEL__: options.devPanel
      })
    ]);
  } else {
    plugins = plugins.concat([
      new webpack.DefinePlugin({
        __DEVELOPMENT__: false,
        __DEVPANEL__: false
      })
    ]);
  }

  return {
    entry: entry,
    output: {
      path: path.join(__dirname, "..", "build", options.development ? "development" : "public"),
      publicPath: publicPath,
      filename: options.development ? "[id].js" : "[name].js",
      chunkFilename: "[id].js",
      sourceMapFilename: "debugging/[file].map",
      pathinfo: options.debug
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.join(__dirname, "..", "client"),
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "ts-loader"
            }
          ]
        },
        {
          test: /\.css?$/,
          use: [
            {
              loader: "css-loader"
            }
          ]
        }
      ]
    },
    devtool: options.devtool,
    resolve: {
      modules: [
        path.join(__dirname, "..", "app"),
        "node_modules"
      ],
      extensions: [".web.js", ".js", ".jsx", ".ts", ".tsx"]
    },
    plugins: plugins,
    devServer: {
      stats: {
        cached: false
      }
    }
  };
};
