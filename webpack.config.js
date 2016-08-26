var path = require('path');

var config = {
    entry: [
        'webpack/hot/dev-server', 
        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
    	loaders: [
        // .js 文件使用 babel 转成ES5语法
        {
	    	test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query:{
                plugins: ["transform-decorators-legacy"],   // 在代码中使用了@connect()语法，需要安装此插件
                presets:['es2015', 'stage-0', 'react']      //备注：es2015用于支持ES6语法，stage-0支持ES7语法，react用于解决render()报错的问题
            } 
    	},
        // .css 文件使用 style-loader 和 css-loader 来处理
        { 
            test: /\.css$/, 
            loader: 'style-loader!css-loader' 
        },
        // .png .jpg 图片使用 file-loader 处理，小于8K的图片转成base64格式
        {
            test: /\.(png|jpg)$/, 
            loader: 'file-loader?limit=8192'
        },
        // .json 文件使用 json-loader 来处理
        { 
            test: /\.json$/, 
            loader: 'json' 
        }]
    }
};

module.exports = config;
