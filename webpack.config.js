const path = require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin')
const webpack =require('webpack')
module.exports={
  mode: process.env.NODE_ENV+'' != 'loc' ? 'production' : 'development',

  entry :'./src/index.js',

  devtool: 'nosources-source-map',//制定文件格式为最小体积文件格式

  devServer:{ // 服务器配置
    contentBase: path.join(__dirname, "./dist"), // 静态文件路径
    // host: "0.0.0.0", // 服务器外部访问
    port:3000 ,// 端口
    open: true,// 从浏览器打开
    // proxy:{ // 服务器代理
    //   "/api": "http://localhost:3000"
    // }
  },
   
  plugins:[
    new HtmlWebpackPlugin({
      inject: 'body', // 将资源 （如 js ）注入到 body 中
      // chunksSortMode: 'manual',
      // excludeChunks:['common.js','index'],
      filename: './index.html', // 输出文件
      showErrors: true, // 将错误信息输出到页面
      // W_ENV: process.env.NODE_ENV,
      // publicPath: pkgJson.config['' + process.env.NODE_ENV].publicPath,
      hash: true,
      template: './public/index.html', // 模板文件
    }),
    
    new webpack.HotModuleReplacementPlugin() ,// 模块热替换

     // 定义全局变量
    new webpack.DefinePlugin({
      "ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
         test:/\.(css|less)$/,
         use:[
           'style-loader',
           'css-loader'
         ]
      },
      // {
      //   // 加载图片
      //   test:/\.(png|svg|jpg|gif)$/,
      //   use:[
      //     'file-loader'
      //   ]
      // },{
      //   // 加载字体
      //   test:/\.(woff|woff2|eot|ttf|otf)$/,
      //   test:[
      //     'file-loader'
      //   ]
      // }
     
    ],
  }
  
}