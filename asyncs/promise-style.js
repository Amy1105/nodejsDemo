const fs = require('fs').promises; // 注意：使用fs.promises获得Promise版本的API

function readConfigsWithPromises() {
  console.log('开始读取配置...');
  
  let baseConfig; // 用于在链式调用间传递数据
  
  // Promise链式调用
  fs.readFile('base.json', 'utf8')
    .then(baseData => {
      baseConfig = JSON.parse(baseData);
      console.log('1. 读取base.json成功:', baseConfig);
      return fs.readFile('database.json', 'utf8'); // 返回新的Promise
    })
    .then(dbData => {
      const dbConfig = JSON.parse(dbData);
      console.log('2. 读取database.json成功:', dbConfig);
      return fs.readFile('app.json', 'utf8');
    })
    .then(appData => {
      const appConfig = JSON.parse(appData);
      console.log('3. 读取app.json成功:', appConfig);
      
      const finalConfig = { ...baseConfig, ...JSON.parse(appData), ...appConfig };
      console.log('✅ 最终配置:', finalConfig);
    })
    .catch(error => {
      // 一个catch捕获所有错误！
      console.error('❌ 读取配置失败:', error);
    });
}

readConfigsWithPromises();

// 改进点：
// 扁平结构：代码不再是金字塔形状
// 统一错误处理：一个.catch()处理所有错误
// 可读性提升：执行流程更清晰

// 但还是有点问题：
// 需要在链式调用外用变量（如baseConfig）传递数据
// 仍然需要理解Promise链的概念

