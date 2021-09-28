<template>
<!--  <ul>-->
<!--    <li>消息编号:{{$route.query.id}}</li>-->
<!--    <li>消息内容:{{$route.query.msg}}</li>-->
<!--  </ul>-->
<!--  <ul>
    <li>消息编号:{{$route.params.id}}</li>
    <li>消息内容:{{$route.params.msg}}</li>
  </ul>-->
  <ul>
    <li>消息编号:{{id}}</li>
    <li>消息内容:{{msg}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props:['id','msg']
}
</script>

<style scoped>

</style>