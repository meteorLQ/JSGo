<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoO.done" @change="checkToDo(todoO.id)"/>
      <span v-show="!todoO.isEdit">{{todoO.title}}</span>
      <input v-show="todoO.isEdit" type="text" :value="todoO.title" @blur="blurToDo(todoO,$event)">
    </label>
    <button class="btn btn-danger" @click="deleteToDo(todoO.id)">删除</button>
    <button  v-show="!todoO.isEdit" class="btn btn-edit" @click="editToDo(todoO)">编辑</button>
  </li>
</template>

<script>
export default {
  name: "ToDoItem",
  props:['todoO'],
  methods:{
    checkToDo(id){
      this.$bus.$emit('checkToDo',id)
    },
    deleteToDo(id){
      if (confirm("确定要删除吗?")){
        this.$bus.$emit('deleteToDoById',id)
      }
    },
    editToDo(todoO){
      if (todoO.hasOwnProperty('isEdit')){
        todoO.isEdit=false
      }else {
        this.$set(todoO,'isEdit',true)
      }
    },
    blurToDo(todoO,e){
      todoO.isEdit=false
      this.$bus.$emit('updateToDoById',todoO.id,e.target.value)
    }
  }

}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #dddddd;
}
li:hover button{
  display: block;
}
</style>