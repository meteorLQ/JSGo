<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoO.done" @change="checkToDo(todoO.id)"/>
      <span>{{todoO.title}}</span>
    </label>
    <button class="btn btn-danger" @click="deleteToDo(todoO.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "ToDoItem",
  props:['todoO','checkToDo','deleteToDoById'],
  methods:{
    deleteToDo(id){
      if (confirm("确定要删除吗?")){
        this.deleteToDoById(id)
      }
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