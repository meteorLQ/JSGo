<template>
  <h1>{{ name }}</h1>
  <hr>
  <h1>{{ user.id }}</h1>
  <h1>{{ user.fullName }}</h1>
  <button @click="changUser">修改用户信息</button>
</template>


<script>
import {ref, reactive} from "vue";

export default {
  name: 'App',
  setup() {
    let name = ref('李隼');

    let user = reactive(
        {
          id: 1,
          fullName: '王武'
        }
    )

    function changUser() {
      name.value = '张三'
      user.fullName='xx'
    }

    return {
      name, changUser, user
    }
  }


}
</script>