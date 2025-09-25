console.log('Hello Node.js!')


// app.js 文件
// 1. 引入 User 类
const UserClass = require('./module/User');

// 2. 使用 new 关键字创建用户实例
const user1 = new UserClass('张三', 'zhangsan@example.com');
const user2 = new UserClass('李四', 'lisi@example.com');

user1.introduce(); // 输出：你好，我是张三，我的邮箱是zhangsan@example.com
user2.introduce(); // 输出：你好，我是李四，我的邮箱是lisi@example.com