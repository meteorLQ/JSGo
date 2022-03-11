<template>
  <div class="container">
    <Category title="游戏">
      <template v-slot="data">
        <ul>
          <li v-for="(d,index) in data.games" :key="index">{{ d }}</li>
        </ul>
      </template>

    </Category>
    <Category title="游戏">
      <template v-slot="data">
        <ol>
          <li v-for="(d,index) in data.games" :key="index">{{ d }}</li>
        </ol>
      </template>

    </Category>
    <Category title="游戏">
      <template v-slot="data">
        <h4 v-for="(d,index) in data.games" :key="index">{{ d }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>


import Category from "./components/Category";

export default {
  name: 'App',
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
