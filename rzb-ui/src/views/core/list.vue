<template>
  <div class="app-container">
    <el-table :data="list" border stripe>
      <el-table-column type="index" width="50"/>
      <el-table-column prop="borrowAmount" label="借款额度" width="180"/>
      <el-table-column prop="integralStart" label="积分区间开始" width="180"/>
      <el-table-column prop="integralEnd" label="积分区间结束" width="180"/>
    </el-table>
  </div>
</template>

<script>
import {list} from '@/api/core/integral-grade'

export default {
  // name: "list",
  data() {
    return {
      list: []
    }
  },
  created() {
    this.fetchDate()
  },
  methods: {
    fetchDate() {
      list().then(response => {
        this.list = response.data
      })
    }
  }
}
</script>

<style scoped>

</style>
