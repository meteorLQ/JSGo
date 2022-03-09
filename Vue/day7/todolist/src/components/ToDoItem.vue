<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoO.done"/>
      <span>{{todoO.title}}</span>
    </label>
    <button class="btn btn-danger" style="display:none">删除</button>
  </li>
</template>

<script>
export default {
  name: "ToDoItem",
  props:['todoO']
}
</script>

<style scoped>

</style>