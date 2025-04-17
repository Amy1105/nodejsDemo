// 每个实例都AsyncLocalStorage维护一个独立的存储上下文。多个实例可以安全地同时存在，而不会相互干扰数据
// 示例用于AsyncLocalStorage构建一个简单的记录器，该记录器为传入的 HTTP 请求分配 ID，
// 并将它们包含在每个请求中记录的消息中

const http = require('node:http');
const { AsyncLocalStorage } = require('node:async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

function logWithId(msg) {
  const id = asyncLocalStorage.getStore();
  console.log(`${id !== undefined ? id : '-'}:`, msg);
}

let idSeq = 0;
http.createServer((req, res) => {
  asyncLocalStorage.run(idSeq++, () => {
    logWithId('start');
    // 想象一下这里的任何异步操作链
    setImmediate(() => {
      logWithId('finish');
      res.end();
    });
  });
}).listen(8080);

http.get('http://localhost:8080');
http.get('http://localhost:8080');
// Prints:
//   0: start
//   1: start
//   0: finish
//   1: finish