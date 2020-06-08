// let a = require('./a.js')
import $ from 'jquery'
import './css/a.css'
import './css/b.css'
import './less/index.less'
// import './scss/index.scss'
// import 'bootstrap/dist/css/bootstrap.css'
// console.log(a)
// console.log('1243242342')
// console.log('牛逼')
// window.alert('牛逼啊兄弟')
let a = 1;
if (a = 1) {
  import('jquery').then(({ default: $})=> {
    console.log('动态引入了jQuery');
    console.log($)
  })
}
 console.log('我是index.html')