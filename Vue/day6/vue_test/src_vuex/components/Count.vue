<template>
  <!--   组件的结构-->
  <div>
    <h1>当前求和为:{{$store.state.sum}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>

</template>

<script>

export default {

  name: 'Count',
  data() {
    return {
      n: 1 // 用户选择，默认1
    }
  },
  computed: {},
  methods: {
    increment() {
      this.$store.commit("ADD",this.n)
    },
    decrement() {
      this.$store.commit("DEC",this.n)
    },
    incrementOdd() {
      this.$store.dispatch("addOdd",this.n)

    },
    incrementWait() {
      this.$store.dispatch("addWait",this.n)

    }

  }
}

</script>

<style>
/*组件的样式*/
</style>