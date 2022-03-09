<template>
  <ul class="todo-main">

    <ToDoItem v-for="todo in todos" :key="todo.id" :todoO="todo" :checkToDo="checkToDo"/>
  </ul>
</template>

<script>
import ToDoItem from "./ToDoItem";

export default {
  name: "ToDoList",
  components: {ToDoItem},
  props:['todos','checkToDo'],
  comments: {
    ToDoItem
  }
}
</script>

<style scoped>

</style>