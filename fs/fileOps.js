// fileOps.js
// 导入fs模块，并使用Promise风格的API（这样可以用async/await）
const fs = require('fs').promises;

async function basicFileOperations() {
  try {
    const fileName = './example.txt';

    // 1. 写入文件（如果文件已存在，会被覆盖）
    await fs.writeFile(fileName, '这是第一行内容。\n');
    console.log('✅ 文件写入成功！');

    // 2. 追加内容到文件末尾
    await fs.appendFile(fileName, '这是追加的第二行内容。\n');
    console.log('✅ 内容追加成功！');

    // 3. 读取整个文件内容
    const content = await fs.readFile(fileName, 'utf-8'); // 指定编码为'utf-8'，得到字符串
    console.log('📖 文件内容如下：');
    console.log(content);

    // 4. 检查文件是否存在
    try {
      await fs.access(fileName);
      console.log('✅ 文件存在');
    } catch (error) {
      console.log('❌ 文件不存在');
    }

  } catch (error) {
    console.error('❌ 操作失败：', error);
  }
}

// 执行函数
basicFileOperations();
