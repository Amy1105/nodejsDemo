// dirOps.js
const fs = require('fs').promises;
const path = require('path'); // path模块用于处理文件路径

async function directoryOperations() {
  try {
    const dirName = './my-files';

    // 1. 创建目录（如果目录已存在会报错，所以用try-catch）
    try {
      await fs.mkdir(dirName);
      console.log(`✅ 目录 "${dirName}" 创建成功`);
    } catch (error) {
      if (error.code === 'EEXIST') {
        console.log(`📁 目录 "${dirName}" 已存在`);
      } else {
        throw error; // 重新抛出其他错误
      }
    }

    // 2. 在目录中创建几个测试文件
    await fs.writeFile(path.join(dirName, 'file1.txt'), '文件1的内容');
    await fs.writeFile(path.join(dirName, 'file2.txt'), '文件2的内容');
    await fs.writeFile(path.join(dirName, 'data.json'), JSON.stringify({ name: '测试', value: 100 }, null, 2));
    console.log('✅ 测试文件创建成功');

    // 3. 读取目录，获取文件/文件夹列表
    const items = await fs.readdir(dirName);
    console.log(`\n📂 目录 "${dirName}" 中的内容：`);
    items.forEach(item => console.log(`  - ${item}`));

    // 4. 获取文件的详细信息（大小、创建时间等）
    console.log('\n📊 文件详细信息：');
    for (const item of items) {
      const itemPath = path.join(dirName, item);
      const stats = await fs.stat(itemPath);
      console.log(`  - ${item}: ${stats.size} 字节, 是目录吗? ${stats.isDirectory()}`);
    }

  } catch (error) {
    console.error('❌ 操作失败：', error);
  }
}

directoryOperations();