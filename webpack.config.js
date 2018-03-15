module.exports = {
	// 如果不加"./"，会默认为组件，从node_modules中找，加上代表的是自己的文件
	entry: './app/index.js'
	output: {
		path: './dist',
		// bundle.js 是webpack打包生成的文件
		filename: 'bundle.js'
	}

}