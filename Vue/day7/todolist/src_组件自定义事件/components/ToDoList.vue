<template>
  <ul class="todo-main">

    <ToDoItem v-for="todo in todos" :key="todo.id" :todoO="todo" :checkToDo="checkToDo" :deleteToDoById="deleteToDoById"/>
  </ul>
</template>

<script>
import ToDoItem from "./ToDoItem";

export default {
  name: "ToDoList",
  components: {ToDoItem},
  props:['todos','checkToDo','deleteToDoById'],
  comments: {
    ToDoItem
  }
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>