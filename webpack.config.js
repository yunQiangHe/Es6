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