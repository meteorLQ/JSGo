<template>
  <div class="app-container">
    <el-table :data="list" border stripe>
      <el-table-column type="index" width="50"/>
      <el-table-column prop="borrowAmount" label="借款额度" header-align="center" width="180"/>
      <el-table-column prop="integralStart" label="积分区间开始" width="180"/>
      <el-table-column prop="integralEnd" label="积分区间结束" width="180"/>
      <el-table-column label="操作" header-align="center" width="180">
        <template slot-scope="scope">
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteById(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {deleteById, list} from '@/api/core/integral-grade'

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
    },
    deleteById(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return deleteById(id)
      }).then(response => {
        this.$message({
          type: 'success',
          message: response.msg
        });
        this.fetchDate();
      }).catch((error) => {
        if ('cancel' === error) {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        }
      });

    }
  }
}
</script>

<style scoped>

</style>
