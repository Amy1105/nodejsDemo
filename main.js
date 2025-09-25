// main.js 文件

// 1. 引入工具模块
// require 的参数是模块的路径。'./' 表示当前目录
// 注意：可以省略 .js 后缀名
const tools = require('./module/tools');

// 2. 现在，tools 变量就是我们 module.exports 出来的那个对象！
// 所以我们可以使用里面的函数和常量

console.log(tools); // 你会看到：{ add: [Function: add], multiply: [Function: multiply], pi: 3.14159 }

const sum = tools.add(5, 3);
const product = tools.multiply(5, 3);

console.log(`5 + 3 = ${sum}`); // 输出：5 + 3 = 8
console.log(`5 * 3 = ${product}`); // 输出：5 * 3 = 15
console.log(`圆周率大约是: ${tools.pi}`); // 输出：圆周率大约是: 3.14159