/*
*该文件是整个项目的入口文件
*
*/
// 引入vue
import Vue from 'vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import {Button, Row, DatePicker} from 'element-ui';

// 引入app组件,它是所有组件的父组件
import App from './App.vue'

// 关闭vue的生产提示
Vue.config.productionTip = false
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

new Vue({
    el: '#app',
    // 将App组件放入容器中
    render: h => h(App)
})
