var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StatsPlugin = require("stats-webpack-plugin");
var loadersByExtension = require("../config/loadersByExtension");

module.exports = function(options) {
	var entry;

	if (options.development) {
		entry = [
			'webpack-dev-server/client?http://0.0.0.0:2992',
			'webpack/hot/only-dev-server',
			'./client/index'
		];
	} else {
		entry = [
			'./client/index'
		];
	}

	var loaders = {
		"js": {
			loaders: options.development ? ["react-hot", "babel-loader?stage=1"] : ["babel-loader?stage=1"],
			include: path.join(__dirname, "..", "client")
		},
		"ts|tsx": {
			loaders: ['ts-loader']
		},
		"json": "json-loader",
		"coffee": "coffee-redux-loader",
		"json5": "json5-loader",
		"txt": "raw-loader",
		"png|jpg|jpeg|gif|svg": "url-loader?limit=10000",
		"woff|woff2": "url-loader?limit=100000",
		"ttf|eot": "file-loader",
		"wav|mp3": "file-loader",
		"html": "html-loader",
		"md|markdown": ["html-loader", "markdown-loader"]
	};
	var cssLoader = options.minimize ? "css-loader?module" : "css-loader?module&localIdentName=[path][name]---[local]---[hash:base64:5]";
	var stylesheetLoaders = {
		"css": 'css-loader',
		"less": [cssLoader, "less-loader"],
		"styl": [cssLoader, "stylus-loader"],
		"scss|sass": [cssLoader, "sass-loader"]
	};
	var additionalLoaders = [
	];
	var alias = {

	};
	var aliasLoader = {

	};
	var externals = [

	];
	var modulesDirectories = ["node_modules"];
	var extensions = ["", ".web.js", ".js", ".jsx"];
	var root = path.join(__dirname, "..", "app");
	var publicPath = options.development ?
		"http://localhost:2992/_assets/" :
		"/_assets/";
	var output = {
		path: path.join(__dirname, "..", "build", options.development ? "development" : "public"),
		publicPath: publicPath,
		filename: "[name].js" + (options.longTermCaching ? "?[chunkhash]" : ""),
		chunkFilename: (options.development ? "[id].js" : "[name].js") + (options.longTermCaching ? "?[chunkhash]" : ""),
		sourceMapFilename: "debugging/[file].map",
		pathinfo: options.debug
	};
	var excludeFromStats = [
		/node_modules[\\\/]react(-router)?[\\\/]/,
		/node_modules[\\\/]socket.io-client[\\\/]/,
		/node_modules[\\\/]rx[\\\/]/
	];
	var plugins = [
		new webpack.PrefetchPlugin("react"),
		new webpack.PrefetchPlugin("react/lib/ReactComponentBrowserEnvironment"),
		new StatsPlugin(path.join(__dirname, "..", "build", options.development ? "stats-dev.json" : "stats.json"), {
			chunkModules: true,
			exclude: excludeFromStats
		})
	];

	Object.keys(stylesheetLoaders).forEach(function(ext) {
		var stylesheetLoader = stylesheetLoaders[ext];
		if(Array.isArray(stylesheetLoader)) stylesheetLoader = stylesheetLoader.join("!");
		if(options.separateStylesheet) {
			stylesheetLoaders[ext] = ExtractTextPlugin.extract("style-loader", stylesheetLoader);
		} else {
			stylesheetLoaders[ext] = "style-loader!" + stylesheetLoader;
		}
	});

	if(options.separateStylesheet) {
		plugins.push(new ExtractTextPlugin("[name].css" + (options.longTermCaching ? "?[contenthash]" : "")));
	}

	if(options.minimize) {
		plugins.push(
			new webpack.optimize.UglifyJsPlugin({
				compressor: {
					warnings: false
				}
			}),
			new webpack.optimize.DedupePlugin()
		);
	}

	if(options.minimize) {
		plugins.push(
			new webpack.DefinePlugin({
				"process.env": {
					NODE_ENV: JSON.stringify("production")
				}
			}),
			new webpack.NoErrorsPlugin()
		);
	}

  if (options.development) {
    plugins = plugins.concat([
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoErrorsPlugin(),
			new webpack.DefinePlugin({
				__DEVELOPMENT__: true,
				__DEVPANEL__: options.devPanel
			})
		]);
  } else {
    plugins.push(new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
      __DEVPANEL__: false
    }));
  }

	return {
		entry: entry,
		output: output,
		target: 'web',
		module: {
			loaders: loadersByExtension(loaders).concat(loadersByExtension(stylesheetLoaders)).concat(additionalLoaders)
		},
		devtool: options.devtool,
		debug: options.debug,
		resolveLoader: {
			root: path.join(__dirname, '..', "node_modules"),
			alias: aliasLoader
		},
		externals: externals,
		resolve: {
			root: root,
			modulesDirectories: modulesDirectories,
			extensions: extensions,
			alias: alias
		},
		plugins: plugins,
		devServer: {
			stats: {
				cached: false,
				exclude: excludeFromStats
			}
		}
	};
};
