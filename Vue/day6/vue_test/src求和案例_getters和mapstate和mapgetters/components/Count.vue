<template>
  <!--   组件的结构-->
  <div>
    <h1>当前求和为:{{ sum }}</h1>
        <h3>当前求和放大10倍为:{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subObject }}</h3>
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
import {mapState,mapGetters} from 'vuex'

export default {

  name: 'Count',
  data() {
    return {
      n: 1, // 用户选择，默认1
    }
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据。（对象写法）
    // ...mapState({sum: 'sum', school: 'school', subObject: 'subObject'})
    // 借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(['sum','school','subObject']),
    ...mapGetters(['bigSum'])
  },
  methods: {
    increment() {
      this.$store.commit('ADD', this.n)
    },
    decrement() {
      this.$store.commit('DEC', this.n)

    },
    incrementOdd() {
      this.$store.dispatch('addOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('addWait', this.n)

    }
  }
}

</script>

<style>
/*组件的样式*/
</style>