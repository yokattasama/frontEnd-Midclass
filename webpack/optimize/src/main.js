import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
// let a = require('./a.js')
// import $ from 'jquery'
// import './css/a.css'
// import './css/b.css'
// import './less/index.less'
// import moment from 'moment'
// import 'moment/locale/zh-cn'
// moment.locale('zh-CN')
// let a = moment().calendar();
// console.log(a);
// import './scss/index.scss'
// import 'bootstrap/dist/css/bootstrap.css'
// console.log(a)
// console.log('1243242342')
// console.log('牛逼')
// window.alert('牛逼啊兄弟')
// let a = 1;
// if (a = 1) {
//   import('jquery').then(({ default: $})=> {
//     console.log('动态引入了jQuery');
//     console.log($)
//   })
// }

Vue.use(VueRouter);

const Home = {
  template: "<h2>我是 home 页面</h2>"
}

const News = {
  template: "<h2>我是 news 页面</h2>"
}

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/news',
      component: News,
    }
  ]
})

new Vue({
  el: '#app',
  data: {
    msg: '我是首页'
  },
  router
})

 console.log('我是index.html')
