<template>
  <ul class="todo-main">

    <ToDoItem/>
    <ToDoItem/>
    <ToDoItem/>
    <ToDoItem/>
    <ToDoItem/>
  </ul>
</template>

<script>
import ToDoItem from "./ToDoItem";

export default {
  name: "ToDoList",
  components: {ToDoItem},
  comments: {
    ToDoItem
  }
}
</script>

<style scoped>

</style>