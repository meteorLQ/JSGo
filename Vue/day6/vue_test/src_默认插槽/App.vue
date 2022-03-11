<template>
  <div class="container">
    <Category title="美食">
      <img src="https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF" alt="">
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(d,index) in games" :key="index">{{ d }}</li>
      </ul>
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
