# ECMAScript 6

## 操作流程
1. 安装使用webpack配置 搭建开发环境  
- => cnpm i webpack webpack-cli --save-dev
- => 添加 "start": "webpack --config webpack.config.js"
- => touch webpack.config.js
- => 配置webpack  入口entry output module plugins 
- => 测试 npm run start or npx webpack
```
const path = require("path"); //引入node 路径处理模块

module.exports = { // node中 模块
    mode: "production",
    entry: "./src/index.js", // 入口
    output: { // 输出
        path: path.resolve(__dirname, "dist"),  //path.resolve() 方法将路径或路径片段的序列解析为绝对路径。
        // Node.js 中__dirname 表示当前文件所在的目录的绝对路径  __filename 表示当前文件的绝对路径
        filename: "bundle.js"
    },
    module: {},
    plugins: [] //注意这个是个数组
}

```
2. JS启用babel转码 参考bable官网
- => npm install --save-dev babel-loader @babel/core
- => webpack module配置
```
module: {
    rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
},
```
- => npm install @babel/preset-env --save-dev
- => tounch .babelrc
```
{
  "presets": ["@babel/preset-env"]
}
```



