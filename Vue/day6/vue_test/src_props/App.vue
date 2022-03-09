<template>
  <div id="app">
    <Student name="擎天柱" :age="110"></Student>
    <Student></Student>
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

