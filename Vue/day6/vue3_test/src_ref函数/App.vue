<template>
  <h1>我是APP组件</h1>
  <h2>name:{{name}}</h2>
  <h2>age:{{age}}</h2>
  <h2>职业:{{job.type}}</h2>
  <h2>薪资:{{job.money}}</h2>
  <button @click="change">修改</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
    // 数据
    let name=ref('张三');
    let age=ref(18);
    let job=ref({
      type:'Java工程师',
      money:'18000'
    })
    // 方法
    function change() {
      name.value='李四';
      age.value='25';
      job.value.type='前端工程师';
    }
    return{name,age,change,job}
  }
}
</script>

