<template>
  <div>
    <h2 @click="showName">name:{{name}}</h2>

      <br>
    <h2>studentAge:{{address}}</h2>
  </div>
</template>

<script>
import Mixin from "../mixin.js"


export default {
  name: "Student",
  data() {
    return {
      name: '北京大学',
      address: 'beijing'
    }
  },
  mixins:[Mixin]
}
</script>

<style scoped>

</style>