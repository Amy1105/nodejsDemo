// logger.js
const fs = require('fs').promises;
const path = require('path');

class SimpleLogger {
  constructor(logDir = './logs') {
    this.logDir = logDir;
    this.init();
  }

  // 初始化日志目录
  async init() {
    try {
      await fs.mkdir(this.logDir, { recursive: true }); // recursive: true 表示如果父目录不存在也一起创建
      console.log(`📁 日志目录已准备: ${this.logDir}`);
    } catch (error) {
      console.error('❌ 初始化日志目录失败:', error);
    }
  }

  // 获取当前时间字符串，用于日志时间戳
  getCurrentTime() {
    return new Date().toISOString().replace('T', ' ').substring(0, 19);
  }

  // 写入日志
  async log(level, message) {
    try {
      const timestamp = this.getCurrentTime();
      const logMessage = `[${timestamp}] ${level.toUpperCase()}: ${message}\n`;
      const logFile = path.join(this.logDir, 'app.log');

      // 追加到日志文件
      await fs.appendFile(logFile, logMessage);
      console.log(logMessage.trim()); // 同时在控制台输出
    } catch (error) {
      console.error('❌ 写入日志失败:', error);
    }
  }

  // 快捷方法
  async info(message) {
    await this.log('info', message);
  }

  async error(message) {
    await this.log('error', message);
  }

  async warn(message) {
    await this.log('warn', message);
  }
}

// 使用示例
async function demoLogger() {
  const logger = new SimpleLogger();

  // 等待初始化完成
  await new Promise(resolve => setTimeout(resolve, 100));

  await logger.info('应用程序启动');
  await logger.warn('发现一个可疑操作');
  await logger.error('数据库连接失败');
  await logger.info('用户登录成功');

  console.log('\n🎉 日志记录完成！请查看 logs/app.log 文件');
}

demoLogger();