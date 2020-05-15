const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // entry的三种写法
  // 字符串 
  // entry: "./app.js",
  // output: {
  //   filename: "bundle.js",
  //   path: path.resolve(__dirname, "dist")
  // }


  // 对象
  // 其中key可以在output作为filename来用
  // key也可以是'path/of/entry'
  // 则会将打包好的entry.js 放在path/of下
  //生成两个js
  entry: {
    'bundle': './app.js',
    // 'vendor': "./jquery.js"

    // "bundle1": "./src/module1.js",
    // "bundle2": "./src/module2.js"
  },


  //  数组
  // 等同于 entry: {main: ['./app.js', "./jquery.js"]}
  // 将两个js 合并生成一个main.js
  // entry: ['./app.js', "./jquery.js"],


  output: {
    //输出只能有一个
    // filename: "[name].js",
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),



    // web pack缓存
    filename: "[name].[chunkhash].js"
  },

  // optimization: {
  //   // 代码拆分

  //   // 将公共的依赖模块提取到新生成的chunk中
  //   // 假设两个入口文件a,b 都引入了lodash
  //   // splitChunks会将loadash单独提取出来 避免重复 减少打包体积
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },

  plugins: [
    // 插件是在打包过程中  使用的一系列工具
    // 比如说打包前先清理dist文件夹， 定义变量， 压缩js等等




    // 打包之前 清理dist文件夹
    new CleanWebpackPlugin(),
    // 根据模板生成index.html到dist/index.html  不用每次打包都要自己修改
    new HtmlWebpackPlugin({
      title: "learnWebpack2",
      template: './public/index.html'
    })
  ],
  module: {
    rules: [
      {
        // webpack 是只认识js的， loader的作用是将
        // 一些webpack不认识的东西做一个转换 比如ts，css， image
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

}