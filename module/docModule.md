当然！这是一个非常核心的概念，通过案例来学习是最好的方式。我们一起来动手实现一下。

### 核心概念速览

*   **`module.exports`**：在一个文件（模块）中，用它来**声明“我要给别人用什么”**。就像一个包裹的出口。
*   **`require`**：在另一个文件中，用它来**引入**别的模块通过 `module.exports` 送出来的东西。就像收快递。

---

### `module.exports` 的几种写法（你需要知道的）

1.  **导出一个对象（最常用）**
    ```javascript
    module.exports = {
      functionA,
      functionB,
      variableC
    };
    ```

2.  **直接导出单个函数/类**
    ```javascript
    // 导出一个主要函数，这个文件就只干这一件事
    module.exports = myAwesomeFunction;
    ```

3.  **逐个添加属性（与第一种效果相同）**
    ```javascript
    module.exports.functionA = functionA;
    module.exports.functionB = functionB;
    // 在引入时，仍然是得到一个包含 functionA 和 functionB 的对象
    ```

### 关键要点总结

*   **路径很重要**：`require(‘./myModule’)` 中的 `./` 表示当前目录。没有 `./` 则Node.js会去核心模块或 `node_modules` 文件夹里找。
*   **`.js` 可省略**：Node.js 默认会加载 `.js` 文件。
*   **`module.exports` 是唯一出口**：一个模块只能有一个 `module.exports`。如果你在代码中多次对它赋值，只有最后一次赋值有效。
*   **实践**：请你务必在电脑上创建这些文件并运行，观察结果。这是理解模块系统最快的方法。

