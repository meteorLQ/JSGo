<template>
  <div class="app-container">
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
        >新增
        </el-button>
      </el-col>
      <!--      <el-col :span="1.5">
              <el-button
                type="success"
                plain
                icon="el-icon-edit"
                size="mini"
                :disabled="single"
                @click="handleUpdate"
                v-hasPermi="['system:dict:edit']"
              >修改
              </el-button>
            </el-col>-->
      <!--      <el-col :span="1.5">
              <el-button
                type="danger"
                plain
                icon="el-icon-delete"
                size="mini"
                :disabled="multiple"
                @click="handleDelete"
                v-hasPermi="['system:dict:remove']"
              >删除
              </el-button>
            </el-col>-->
      <!--      <el-col :span="1.5">
              <el-button
                type="warning"
                plain
                icon="el-icon-download"
                size="mini"
                :loading="exportLoading"
                @click="handleExport"
                v-hasPermi="['system:dict:export']"
              >导出
              </el-button>
            </el-col>-->
      <!--      <el-col :span="1.5">
              <el-button
                type="danger"
                plain
                icon="el-icon-refresh"
                size="mini"
                @click="handleRefreshCache"
                v-hasPermi="['system:dict:remove']"
              >刷新缓存
              </el-button>
            </el-col>-->
      <!--      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>-->
    </el-row>

    <el-table :data="list"  >
      <el-table-column type="index" width="50"/>
      <el-table-column prop="borrowAmount" label="借款额度" header-align="center" width="180"/>
      <el-table-column prop="integralStart" label="积分区间开始" width="180"/>
      <el-table-column prop="integralEnd" label="积分区间结束" width="180"/>
      <el-table-column label="操作" header-align="center" width="180">
        <!--        <template slot-scope="scope">
                  <el-button size="mini">编辑</el-button>
                  <el-button size="mini" type="danger" @click="deleteById(scope.row.id)">删除</el-button>
                </template>-->
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
          >修改
          </el-button>
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="deleteById(scope.row.id)"
          >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>


    <!-- 添加或修改参数配置对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="integralGrade" label-width="100px">
        <el-form-item label="借款额度" prop="borrowAmount">
          <el-input-number v-model="integralGrade.borrowAmount" :min="0"></el-input-number>
        </el-form-item>
        <el-form-item label="积分开始区间" prop="integralStart">
          <el-input-number v-model="integralGrade.integralStart" :min="0"></el-input-number>
        </el-form-item>
        <el-form-item label="积分结束区间" prop="integralEnd">
          <el-input-number v-model="integralGrade.integralEnd" :min="0"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveOrUpdate">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import {deleteById, list, save, getData} from '@/api/core/integral-grade'


export default {
  // name: "list",
  data() {
    return {
      open: false,
      list: [],
      integralGrade: {},
      title:''
    }
  },
  created() {
    this.fetchDate()
  },
  methods: {
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id
      getData(id).then(response => {
        this.integralGrade = response.data;
        this.open = true;
        this.title = "修改数据";
      });
    },
    saveOrUpdate() {
      //if (this.integralGrade.id == undefined) {
        this.saveData()
      // } else {
      //
      // }
    },
    saveData() {
      save(this.integralGrade).then(res => {
        this.open = false;
        this.$message({
          type: 'success',
          message: res.msg
        });
        this.fetchDate();
      })
    },
    update() {

    },
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {

      this.resetForm("form");
    },
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加积分等级";
    },
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
.mb8 {
  margin-bottom: 8px;
}
</style>
