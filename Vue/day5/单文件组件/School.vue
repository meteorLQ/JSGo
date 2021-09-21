<template>
  <!--   组件的结构-->
  <div>
    schoolName:{{ schoolName }}
    <br>
    address:{{ address }}
    <br>
  </div>

</template>

<script>
// 组件交互相关的代码（数据、方法等等）

export default {
  name:'School',
  data() {
    return {
      schoolName: '北京大学',
      address: '北京'
    }
  },
  components: {
    school
  }
}

</script>

<style>
/*组件的样式*/
</style>