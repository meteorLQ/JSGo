<template>
  <div>
   <h2 @click="showName">studentName:{{name}}</h2>
    <br>
    studentAge:{{age}}
  </div>
</template>

<script>
import Mixin from "../mixin.js"

export default {
  name: "Student",
  data() {
    return {
      name: '擎天柱',
      age: '110'
    }
  },
  mixins:[Mixin]

}
</script>

<style scoped>

</style>