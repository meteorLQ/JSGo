<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <Student ref="stu"></Student>
    <hr>
    <School></School>
    <div ref="hi">你好,欢迎学习ref</div>
    <button @click="showRef">点击</button>
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: 'App',
  components: {
    School, Student
  }, methods: {
    showRef(){
      console.log(this.$refs.stu)
      console.log(this.$refs.hi)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
