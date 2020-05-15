const merge = require("webpack-merge")
const common = require("./webpack.config.js")
const webpack = require("webpack");
module.exports = merge(common, {
  // webpack4 新增
  // 相当于省略了
    //  -  plugins: [
        // -    new UglifyJsPlugin(/* ... */),
        // -    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
        // -    new webpack.optimize.ModuleConcatenationPlugin(),
        // -    new webpack.NoEmitOnErrorsPlugin()
    // -  ]
  mode: "production",
  // 没有sourcemap 错误定位到打包之后的js 但是打包之后的bundle.js体积小
  // webpack4 production 默认是none
  devtool: 'source-map'


  // 关于tree shaking
})
// 我们已经知道，想要使用 tree shaking 必须注意以下……

// 使用 ES2015 模块语法（即 import 和 export）。
// 确保没有 compiler 将 ES2015 模块语法转换为 CommonJS 模块（这也是流行的 Babel preset 中 @babel/preset-env 的默认行为 - 更多详细信息请查看 文档）。
// 在项目 package.json 文件中，添加一个 "sideEffects" 属性。
// 通过将 mode 选项设置为 production，启用 minification(代码压缩) 和 tree shaking。