const merge = require("webpack-merge")
const common = require("./webpack.config.js")
const path = require("path")
const webpack = require("webpack");
module.exports = merge(common, {
  // webpack4 新增
  // 相当于省略了
  // - plugins: [
  // -   new webpack.NamedModulesPlugin(),
  // -   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
  // - ]
  mode: "development",
  // webpack4 development模式下 默认是inline-source-map
  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: "9000"
  },
  optimization: {
    usedExports: true
  }

})