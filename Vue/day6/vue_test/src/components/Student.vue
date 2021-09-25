<template>
  <div>
    studentName:{{ studentName }}
    <br>
    studentAge:{{ studentAge }}
    <br>
    <button @click="getIntegralGrade">点击加载数据</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Student",
  data() {
    return {
      studentName: '擎天柱',
      studentAge: '110'
    }
  },
  methods: {
    getIntegralGrade() {
      axios.get('http://localhost:8080/integralGrade/list').then(
          res => {
            console.log('请求成功了', res.data.data)
          },
          error => {
            console.log('请求失败了',error.message)
          })
    }
  }
}
</script>

<style scoped>

</style>