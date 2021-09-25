<template>
  <!--   组件的结构-->
  <div class="stu">
    schoolName:{{ schoolName }}
    <br>
    address:{{ address }}
    <br>
    <Student/>
  </div>

</template>

<script>
// 组件交互相关的代码（数据、方法等等）
export default {
  name: 'School',
  data() {
    return {
      schoolName: '北京大学',
      address: '北京'
    }
  }
}

</script>

<style scoped>
.stu {
  background-color: red;
}
</style>