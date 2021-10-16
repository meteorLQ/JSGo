<template>
  <div class="app-container">
    <el-form ref="form" :model="integralGrade" label-width="80px">
      <el-form-item label="借款额度">
        <el-input-number v-model="integralGrade.borrowAmount" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item label="积分开始区间">
        <el-input-number v-model="integralGrade.integralStart" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item label="积分结束区间">
        <el-input-number v-model="integralGrade.integralEnd" :min="0"></el-input-number>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="saveOrUpdate">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {save} from '@/api/core/integral-grade'

export default {
  data() {
    return {integralGrade:{}}
  },
  methods: {
    saveOrUpdate() {
      this.saveData()
    },
    saveData() {
      save(this.integralGrade).then(res => {
        this.$message({
          type: 'success',
          message: res.message
        })
      })
    },
    update() {

    }
  }
}
</script>


<style scoped>

</style>
