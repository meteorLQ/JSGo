<template>
  <div id="app">
    <Student></Student>
    <br>
    <school/>
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: 'App',
  components: {
    Student,School
  }
}
</script>
