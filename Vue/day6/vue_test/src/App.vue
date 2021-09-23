<template>
  <div id="app">
    <Student name="擎天柱" age="110"></Student>
    <Student name="大黄蜂"></Student>
  </div>
</template>

<script>
import Student from "./components/Student";
export default {
  name: 'App',
  components: {
    Student
  }
}
</script>

