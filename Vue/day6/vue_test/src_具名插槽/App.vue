<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF" alt="">
      <a slot="foot" href="">更多</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(d,index) in games" :key="index">{{ d }}</li>
      </ul>
     <template v-slot:foot>
       <a  href="">单机</a>
       <a  href="">网络</a>
     </template>
    </Category>
    <!--    <Categor  y title="电影" :listData="films"></Category>-->
  </div>
</template>

<script>


import Category from "./components/Category";

export default {
  name: 'App',
  data() {
    return {
      foods: ['牛奶', '面包', '可乐'],
      games: ['法环', '红警', '师父'],
      films: ['指环王1', '指环王2', '指环王3']
    }
  },
  components: {
    Category
  }
}
</script>


<style>
.container {
  display: flex;
  justify-content: space-around;
}

</style>
