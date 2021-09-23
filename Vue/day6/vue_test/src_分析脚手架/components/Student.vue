<template>
  <div>
    studentName:{{studentName}}
    <br>
    studentAge:{{studentAge}}
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      studentName: '擎天柱',
      studentAge: '110'
    }
  }
}
</script>

<style scoped>

</style>