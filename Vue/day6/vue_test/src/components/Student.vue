<template>
  <div>
    <h3>{{ msg }}</h3>
    name:{{ name }}
    <br>
    age:{{ age+1 }}
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: '我们是汽车人'
    }

  },
  // 简单声明接收
  // props: ['name', 'age']
  // 接收的同时对数据进行类型限制
/*  props:{
    name:String,
    age:Number
  }*/
  props:{
    name:{
      type:String,
      required:true
    }
  }

}
</script>

<style scoped>

</style>