import str from './hotmodule'
import axios from 'axios'
// console.log(str);
console.log('我是other.js');

// axios.get('/api/getUserInfo').then((res) => {
//   console.log(res);
// })

module.hot.accept('./hotmodule', function() {
  const _str = require('./hotmodule');
  console.log(_str);
})