<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router D111emo</h2>
      <button @click="forward">前进</button>
      <button @click="back">后退</button>
      <button @click="go">GO</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    },
    go(){
      this.$router.go(2)
    }
  }
}
</script>

<style scoped>

</style>