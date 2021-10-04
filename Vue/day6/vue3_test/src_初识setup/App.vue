<template>
  <h1>我是APP组件</h1>
  <h2>name:{{name}}</h2>
  <h2>age:{{age}}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>

export default {
  name: 'App',
  setup(){
    // 数据
    let name='张三'
    let age=18
    // 方法
    function sayHello() {
      alert(`${name}`)
    }
    return{name,age,sayHello}
  }
}
</script>

