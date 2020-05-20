console.log('我是 a 模块')
// alert('hahah')
window.setTimeout(function () {
  console.log('使用原生函数打印')
}, 1000)
window.setTimeout(()=> {
  console.log('使用箭头函数打印')
}, 1000)
function *fun () {
  yield 1
  yield 2
  return 3
}
// let testfun = fun()
// console.log(testfun.next())
// console.log(testfun.next())
// console.log(testfun.next())
// console.log(testfun.next())

let str = '124351515'
console.log(str.includes('2'))

export default {
  name: '张三'
}