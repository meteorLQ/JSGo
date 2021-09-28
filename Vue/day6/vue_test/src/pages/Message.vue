<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!--跳转路由并传query参数，to的字符串写法-->
        <!--<router-link :to="`/home/message/detail?id=${m.id}&msg=${m.msg}`">{{m.msg}}</router-link>&nbsp;&nbsp;-->
        <!--跳转路由并携带query参数,to的对象写法-->
        <!--        <router-link :to="{
                   // 路由命名的使用
                  name:'detail',
                  query:{
                    id:m.id,
                    msg:m.msg
                  }
                }">{{ m.msg }}
                </router-link>&nbsp;&nbsp;-->

        <router-link :to="{
           // 路由命名的使用
          name:'detail',
          params:{
            id:m.id,
            msg:m.msg
          }
        }">{{ m.msg }} param参数
        </router-link>&nbsp;&nbsp;
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>

    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      messageList: [
        {
          id: '1', msg: '消息1'
        },
        {
          id: '2', msg: '消息2'
        },
        {
          id: '3', msg: '消息3'
        }
      ]
    }
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name:'detail',
        params:{
          id:m.id,
          msg:m.msg
        }
      })
    },
    replaceShow(m) {
      this.$router.replace({
        name:'detail',
        params:{
          id:m.id,
          msg:m.msg
        }
      })
    }
  }
}
</script>

<style scoped>

</style>