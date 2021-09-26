<template>
  <!--   组件的结构-->
  <div>
    <h1>当前求和为:{{$store.state.sum}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>

</template>

<script>
// 组件交互相关的代码（数据、方法等等）
export default {
  name: 'Count',
  data() {
    return {
      n: 1, // 用户选择，默认1
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('add', this.n)
    },
    decrement() {

    },
    incrementOdd() {

    },
    incrementWait() {

    }
  }
}

</script>

<style>
/*组件的样式*/
</style>