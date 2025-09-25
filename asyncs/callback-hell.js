const fs = require('fs');

// 回调函数方式 - 层层嵌套形成"回调地狱"
function readConfigsWithCallbacks() {
  console.log('开始读取配置...');
  
  // 第一层回调
  fs.readFile('base.json', 'utf8', (error, baseData) => {
    if (error) {
      console.error('读取base.json失败:', error);
      return;
    }
    
    const baseConfig = JSON.parse(baseData);
    console.log('1. 读取base.json成功:', baseConfig);
    
    // 第二层回调（嵌套更深了）
    fs.readFile('database.json', 'utf8', (error, dbData) => {
      if (error) {
        console.error('读取database.json失败:', error);
        return;
      }
      
      const dbConfig = JSON.parse(dbData);
      console.log('2. 读取database.json成功:', dbConfig);
      
      // 第三层回调（已经很难读了！）
      fs.readFile('app.json', 'utf8', (error, appData) => {
        if (error) {
          console.error('读取app.json失败:', error);
          return;
        }
        
        const appConfig = JSON.parse(appData);
        console.log('3. 读取app.json成功:', appConfig);
        
        // 所有配置读取完成
        const finalConfig = { ...baseConfig, ...dbConfig, ...appConfig };
        console.log('✅ 最终配置:', finalConfig);
        
        // 如果还有第四层、第五层... 这就是"回调地狱"！
      });
    });
  });
}

readConfigsWithCallbacks();

// 问题：
// 金字塔形状：代码向右缩进越来越深，形成"金字塔厄运"
// 错误处理重复：每个回调都要写一遍错误处理
// 难以维护：添加新步骤或修改顺序非常困难