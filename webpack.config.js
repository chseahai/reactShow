const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const PATH = {
	//__dirname代表当前的路径
	app: path.join(__dirname, "app"),
	build: path.join(__dirname, "build")
}

const commonConfig = {
	entry: {
		app: path.join(PATH.app, "root.js")
	},
	output:{
		publicPath: '/', 
		path: PATH.build,
		filename: '[name].js'   //代表上边entry后面的箭值(app)
	},
	module: {
		loaders:[
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},{
				test: /\.css?$/,
				loader: 'style-loader!css-loader'
			},{
	        test: /\.mustache/,
		        loader: 'mustache-loader'
		    },{
		       test: /\.(png|jpg|gif|jpeg|svg)$/,
		       loader: 'url-loader?limit=8192&name=images/[name].[ext]'
		    }
		]
	},
	plugins:[new HtmlWebpackPlugin({
		title: "react study",
		template: path.join(PATH.app, "index.mustache")
	})]
}

const productConfig = merge(commonConfig, {    //上线的配置
	plugins:[
		new webpack.DefinePlugin({
				'process.env':{
		        'NODE_ENV': JSON.stringify('production')     //做了代码的压缩，直接把线上的一些错误的代码直接屏蔽掉
			}
	    }),
		new webpack.optimize.UglifyJsPlugin()    //直接进行Js代码的压缩	
	]
})

const devConfig = merge([
	commonConfig,
	{
		// browserHistory ,hsahHistory #
		// browserHistory使用时，需要服务器端配合做一个配置，不然就会出错 404 
		devServer: {
			historyApiFallback: true,     //不配置的话  当首页跳转到详情页的时候会出现 404 ;原因是：historyApiFallback是和路由配合使用的
			inline: true    //热模块加载，不需要重新刷新
		}
	}
])

module.exports = (env) => {

	if (env == "dev") {
		return devConfig;
	}

	return productConfig;
}