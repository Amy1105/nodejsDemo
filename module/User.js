// User.js 文件

// 1. 定义一个类
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  introduce() {
    console.log(`你好，我是${this.name}，我的邮箱是${this.email}`);
  }
}

// 2. 直接导出这个类
module.exports = User;