<template>
  <div>
    <school></school>
    <student></student>
  </div>
</template>

<script>
import school from './School';
import student from './Student';
export default {
  name: "App",
  components:{
    school,student
  }
}
</script>

<style scoped>

</style>