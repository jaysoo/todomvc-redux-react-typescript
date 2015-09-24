module.exports = [
	require("./make-webpack-config")({
		longTermCaching: true,
		separateStylesheet: true,
		minimize: true,
	 	devtool: "source-map"
	}),
	require("./make-webpack-config")({
		minimize: true
	})
];