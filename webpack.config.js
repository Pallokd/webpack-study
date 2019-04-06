const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry:path.join(__dirname,'./src/main.js'),//只能用绝对路径 要打包的文件是哪个
  output: {//打包之后放哪 打包之后叫什么名字
    path:path.join(__dirname,'./dist'),//生成的目录
    filename:'bundle.js'//生成的文件的名字
  }, //出口 米饭
  //bundle.js不再是生成到dist目录，而是生成到内存当中（特别快）
  devServer:{//配置webpack-dev-server相关的属性
    open:true,//默认会打开浏览器
    contentBase:'src',//指定路径打开的是src
    port:3000,//端口
    hot:true//热更新 光有这一行不够的
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),//热更新的功能 当你写css的时候，不会刷新页面
    //这个插件的作用是：把src中的index.html当成了模板 用了之后，我们不需要手动在html中引入bundle.js 
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),
      filename:'index.html',//生成的文件的名字
      title:'这是我们自己写的标题',//数据，可以通过<%= %>的方式在模板中使用
      hash:true //hash就像人的身份证一样 保证了文件不会有缓存的存在
    }),
    new VueLoaderPlugin()
  ],
  module:{
    rules:[//用来处理非js文件的
      //css-loader解析css文件 style-loader把css-loader解析出来的东西变成字符串 追加到dom当中
      //顺序很重要 从右往左
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
      //默认图片名字是hash值(32)
      //图片的名字：10位hash值+原始的图片名字.扩展名 
      //当图片的大小是10000字节(1024字节 = 1kb 1024kb = 1mb 1024mb = 1g)以上的时候，就会还是当成图片来输出，如果是10000字节以下，就转换成base64
      {test:/\.(jpg|gif|bmp|jpeg|png)/,use:'url-loader?limit=10000&name=[hash:10]-[name].[ext]'},
      //处理字体文件
      { test:/\.(ttf|eot|svg|woff|woff2)/,use:'url-loader'},
      //处理es6语法(不兼容的es6)
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      {test:/\.vue$/,use:'vue-loader'}
    ]
  }
}

//引入图片