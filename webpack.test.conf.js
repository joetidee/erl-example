// hack for Ubuntu on Windows
try {
    require('os').networkInterfaces();
}
catch (e) {
    require('os').networkInterfaces = () => ({});
}

const path = require('path');
const webpack = require("webpack");
var nodeExternals = require('webpack-node-externals');


module.exports = {
	entry: [
        "./test.js"
    ],
	externals: [
        nodeExternals(), // in order to ignore all modules in node_modules folder.
        {
            'react/addons': 'react',
            'react/lib/ExecutionEnvironment': 'react',
            'react/lib/ReactContext': 'react'
        }
    ],
    module: {
        rules: [{
            test: /\.js?$/,
            use: ['babel-loader','react-loader']
        },{
            test: /\.jsx?$/,
            use: ['babel-loader?' + JSON.stringify({
                presets: ["es2015", "stage-0", "react"]
            })]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({ 'typeof window': '\"object\"' })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
		alias: {
            'app': "./index.jsx"
        }
    },
	target: 'node' // in order to ignore built-in modules like path, fs, etc.
};