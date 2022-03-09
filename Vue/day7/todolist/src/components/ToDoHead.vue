<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="taskName" @keyup.enter="add"/>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {

  name: "ToDoHead",
  data() {
    return {
      taskName: ''
    }
  },
  props:['addTodo'],
  methods: {
    add() {
      if (!this.taskName.trim()) return alert("请输入你的任务名称")

      const todo = {
        id: nanoid(),
        title: this.taskName,
        done: false
      }
      this.addTodo(todo)
      this.taskName=''
    }
  }
}
</script>

<style scoped>

</style>