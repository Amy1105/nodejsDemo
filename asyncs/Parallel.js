//如果三个文件读取不依赖顺序，可以并行处理提高效率

// async/await 并行处理示例
async function readConfigsParallel() {
  try {
    console.log('开始并行读取配置...');
    
    // 同时启动三个读取操作，用Promise.all等待全部完成
    const [baseData, dbData, appData] = await Promise.all([
      fs.readFile('base.json', 'utf8'),
      fs.readFile('database.json', 'utf8'),
      fs.readFile('app.json', 'utf8')
    ]);
    
    const baseConfig = JSON.parse(baseData);
    const dbConfig = JSON.parse(dbData);
    const appConfig = JSON.parse(appData);
    
    console.log('所有配置读取完成！');
    const finalConfig = { ...baseConfig, ...dbConfig, ...appConfig };
    console.log('✅ 最终配置:', finalConfig);
    
    return finalConfig;
  } catch (error) {
    console.error('读取失败:', error);
  }
}

readConfigsParallel();