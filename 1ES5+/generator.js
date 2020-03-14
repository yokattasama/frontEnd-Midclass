const { readFile } = require('fs')
const path = require('path')
const file1 = path.join(__dirname, './text/1.txt')
const file2 = path.join(__dirname, './text/2.txt')
console.log('开始调试')
let Thunk = function (fileName) {
  return function (callback) {
    return readFile(fileName, callback)
  }
}
function* f() {
  let data1 = yield Thunk(file1)
  console.log('文件1读取完成' + data1)
  let data2 = yield Thunk(file2)
  console.log('文件2读取完成' + data2)
}

function run(f) {
  let it = f()

  function nextStop(err, data) {
    var result = it.next(data)
    if(result.done) return;
    result.value(nextStop)
  }

  nextStop()
}

run(f)