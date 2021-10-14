<template>
  <div class="app-container">
    <el-form  label-width="80px">

    </el-form>
  </div>
</template>

<script>
import {save} from '@/api/core/integral-grade'

export default {
  data:{

  },
  methods:{
    saveOrUpdate(){
      this.saveData()
    },
    saveData(){
      save(this.integralGrade).then(res=>{
        this.$message({
          type:'success',
          message:res.message
        })
      })
    },
    update(){

    }
  }
}
</script>


<style scoped>

</style>
