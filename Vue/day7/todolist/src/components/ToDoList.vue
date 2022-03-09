<template>
  <ul class="todo-main">
    <li>
      <label>
        <input type="checkbox"/>
        <span>xxxxx</span>
      </label>
      <button class="btn btn-danger" style="display:none">删除</button>
    </li>
    <li>
      <label>
        <input type="checkbox"/>
        <span>yyyy</span>
      </label>
      <button class="btn btn-danger" style="display:none">删除</button>
    </li>
  </ul>
</template>

<script>
import ToDoItem from "./ToDoItem";

export default {
  name: "ToDoList",
  comments: {
    ToDoItem
  }
}
</script>

<style scoped>

</style>