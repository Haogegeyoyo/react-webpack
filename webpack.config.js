const path = require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
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
    // 生成 dist 文件夹前先 清除 原有dist
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body', // 将资源 （如 js ）注入到 body 中
      // chunksSortMode: 'manual',
      // excludeChunks:['common.js','index'],
      // filename: './index.html', // 输出文件
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
    // filename:'[name].bundle.js',
    filename:'[name].[chunkhash].js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
         test:/\.(css|less)$/,
         use:[
           'style-loader',
           'css-loader',
          //  'postcss-loader',
          //  'less-loader',
          { loader: 'less-loader', options: { javascriptEnabled: true } },
           {
             loader:'px2vw-view-loader',
             options:{
               viewportWidth: 750, // 设计稿宽度，单位为像素
               viewportUnit: 'vw', // 转换单位
               minPixelValue:1, //最小转换单体，例如minPixelValue:1，则1px及以下不进行转换
               decimal:3 // 转换后保留的小数位数
             }
            },
         ]
      },
      {
        test:/\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
              // babel 转义的配置选项
            babelrc: false,
            presets: [
            // 添加 preset-react
            require.resolve('@babel/preset-react'),
            [require.resolve('@babel/preset-env'), {modules: false}]
            ],
            // 配置 antd-mobile 按需 引入，同时也会引入样式
            plugins: [ ["import", { libraryName: "antd-mobile", style: true }]], //`style: true` 会加载 less 文件
            cacheDirectory: true
              },
            }
          }
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
  },

  // 配置快捷路径
  resolve: {
    extensions: ['.web.js', '.js', '.jsx', '.json', '.css', '.less'],
    modules: ['node_modules', path.join(__dirname, 'src')],
    alias: {
      'widget': path.join(__dirname, 'src/widget'),
      'utils': path.join(__dirname, 'src/utils'),
      'config': path.join(__dirname, 'src/config'),
      'assets': path.join(__dirname, 'src/assets'),
      "@":path.join(__dirname, 'src')
      }
  },
  
}