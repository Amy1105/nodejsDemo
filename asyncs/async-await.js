const fs = require('fs').promises;

// async函数：标记这个函数内部有异步操作
async function readConfigsWithAsyncAwait() {
  try {
    console.log('开始读取配置...');
    
    // await：等待Promise完成，直接拿到结果
    const baseData = await fs.readFile('base.json', 'utf8');
    const baseConfig = JSON.parse(baseData);
    console.log('1. 读取base.json成功:', baseConfig);
    
    const dbData = await fs.readFile('database.json', 'utf8');
    const dbConfig = JSON.parse(dbData);
    console.log('2. 读取database.json成功:', dbConfig);
    
    const appData = await fs.readFile('app.json', 'utf8');
    const appConfig = JSON.parse(appData);
    console.log('3. 读取app.json成功:', appConfig);
    
    const finalConfig = { ...baseConfig, ...dbConfig, ...appConfig };
    console.log('✅ 最终配置:', finalConfig);
    
    return finalConfig; // 可以返回结果供其他地方使用
    
  } catch (error) {
    // 使用try-catch捕获所有错误
    console.error('❌ 读取配置失败:', error);
    throw error; // 可以选择重新抛出错误
  }
}

// 调用async函数
readConfigsWithAsyncAwait();

//  终极优势：
// 同步写法：看起来和普通同步代码一模一样！
// 错误处理简单：熟悉的try-catch语法
// 变量作用域自然：不需要外部变量传递数据
// 最易读易维护