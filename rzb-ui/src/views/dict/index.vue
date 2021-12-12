<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch">
      <el-form-item label="字典名称" prop="menuName">
        <el-input
          v-model="queryParams.menuName"
          placeholder="请输入字典名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

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
      <el-col :span="1.5">
        <!--        <el-button-->
        <!--          type="info"-->
        <!--          plain-->
        <!--          icon="el-icon-sort"-->
        <!--          size="mini"-->
        <!--          @click="toggleExpandAll"-->
        <!--        >展开/折叠-->
        <!--        </el-button>-->
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table
      :data="dictList" ref="table" row-key="id" lazy :load="load">
      <!--      :default-expand-all="isExpandAll"-->


      <el-table-column prop="menuName" label="名称" width="160">
        <template v-slot="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="dictCode" label="编码" align="center" width="150">
        <template v-slot="scope">
          <span>{{ scope.row.dictCode }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="value" label="值" align="center" width="150">
        <template v-slot="scope">
          <span>{{ scope.row.value }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" align="center" prop="createTime">
        <template v-slot="scope">
          <span>{{ parseTime(scope.row.createTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button size="mini"
                     type="text"
                     icon="el-icon-edit"
                     @click="handleUpdate(scope.row)"
          >修改
          </el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-plus"
            @click="handleAdd(scope.row)" v-if="scope.row.parentId==1"
          >新增
          </el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
          >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加或修改菜单对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="680px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-row>
          <el-col>
            <el-form-item label="名称" prop="name">
              <el-input v-model="form.name" placeholder="请输入名称"/>
            </el-form-item>
          </el-col>
          <el-col v-if="this.form.parentId==0">
            <el-form-item label="编码" prop="dictCode">
              <el-input v-model="form.dictCode" controls-position="right" :min="0"/>
            </el-form-item>
          </el-col>
          <el-col v-if="this.form.parentId!=0">
            <el-form-item label="值" prop="value">
              <el-input v-model="form.value" controls-position="right" :min="0"/>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import { listMenu, getMenu, delMenu, addMenu, updateMenu } from "@/api/system/menu";
// import Treeselect from "@riophae/vue-treeselect";
// import "@riophae/vue-treeselect/dist/vue-treeselect.css";
// import IconSelect from "@/components/IconSelect";

import {listByParentId, saveOrUpdateDict, deleteById, getDictById} from "@/api/dict/dict";

export default {
  name: "Menu",
  dicts: ['sys_show_hide', 'sys_normal_disable'],
  components: {},
  data() {
    return {
      //symbolKey:'',
      // 遮罩层
      loading: true,
      // 显示搜索条件
      showSearch: true,
      // 字典表格树数据
      dictList: [],
      // 菜单树选项
      menuOptions: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 是否展开，默认全部折叠
      isExpandAll: false,
      // 重新渲染表格状态
      refreshTable: true,
      // 查询参数
      queryParams: {
        menuName: undefined,
        visible: undefined
      },
      // 表单参数
      form: {},
      // map来缓存懒加载后的tree数据
      maps: new Map(),
      // 表单校验
      rules: {
        name: [
          {required: true, message: "字典类型名称不能为空", trigger: "blur"}
        ],
        value: [
          {required: true, message: "值不能为空", trigger: "blur"}
        ],
        dictCode: [
          {required: true, message: "字典编码不能为空", trigger: "blur"}
        ]
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // 选择图标
    selected(name) {
      this.form.icon = name;
    },
    /** 查询菜单列表 */
    getList() {
      this.loading = true;
      listByParentId(1).then(response => {
        this.dictList = response.data;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {};
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    /** 新增按钮操作 */
    handleAdd(row) {
      this.reset();
      //this.getTreeselect();
      if (row != null && row.id) {
        this.form.parentId = row.id;
      } else {
        this.form.parentId = 1;
      }
      this.open = true;
      this.title = "添加字典";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      getDictById(row.id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改字典";
      });
    },
    /** 提交按钮 */
    submitForm: function () {
      this.$refs["form"].validate(valid => {
        if (valid) {

          saveOrUpdateDict(this.form).then(res => {
            this.$message({
              type: 'success',
              message: res.msg
            });
            this.open = false;
            //this.symbolKey=Symbol(new Date().toString())
            debugger
            console.log(this.form.parentId)
            if (this.form.parentId == 1) {
              this.getList();
            } else {
              this.afreshLoad(this.form.parentId)
            }
          });
        }

      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return deleteById(row.id)
      }).then(response => {
        this.$message({
          type: 'success',
          message: response.msg
        });
        debugger
        console.log(row)
        const {id}=row
        console.log(id)

        if (row.parentId == 1 || row.parentId == undefined) {
          this.getList();
        } else {
          this.afreshLoad(row.parentId)
        }

      }).catch((error) => {
        if ('cancel' === error) {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        }
      });

    },
    /*懒加载数据*/
    load(tree, treeNode, resolve) {
      this.maps.set(tree.id, {tree, treeNode, resolve})
      listByParentId(tree.id).then(response => {
          resolve(response.data)
      });
    },
    // 用户删除或新增节点后刷新数据
    afreshLoad(id) {
      debugger
      if (this.maps.get(id)!=undefined){
        const {tree, treeNode, resolve} = this.maps.get(id);
        listByParentId(tree.id).then(response => {
          this.$set(this.$refs.table.store.states.lazyTreeNodeMap,id,[])
          resolve(response.data)
        });
      }else {
        this.getList();
      }
    }
  }
};
</script>
