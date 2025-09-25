// tools.js 文件

// 1. 定义一个函数（这个函数目前只在这个文件内可用）
const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

// 2. 定义一个常量
const PI = 3.14159;

// 3. 关键步骤：决定这个模块要对外提供哪些内容
// 方式一：导出一个对象（推荐，清晰明了）
module.exports = {
  add: add,
  multiply: multiply,
  pi: PI
};

// 也可以使用ES6简写语法，因为属性名和变量名相同
// module.exports = { add, multiply, pi: PI };