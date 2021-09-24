<template>
  <!--   组件的结构-->
  <div>
    schoolName:{{ schoolName }}
    <br>
    address:{{ address }}
    <br>
    <span>11</span>
    <Student/>
  </div>

</template>

<script>
// 组件交互相关的代码（数据、方法等等）
import Student from "./Student";
export default {
  name:'School',
  data() {
    return {
      schoolName: '北京大学',
      address: '北京'
    }
  },
  components: {
    Student
  }
}

</script>

<style>
/*组件的样式*/
</style>