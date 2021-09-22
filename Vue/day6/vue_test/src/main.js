/*
*该文件是整个项目的入口文件
*
*/


// 引入vue
import Vue from 'vue'
// 引入app组件,它是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象---vm
new Vue({
  el:'#app',
  // 将App组件放入容器中
  render: h => h(App),
})
