<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <ToDoHead @addTodo="addTodo"></ToDoHead>
        <ToDoList :todos="todos"></ToDoList>
        <ToDoFooter :todos="todos" @checkedAll="checkedAll" @clearTodos="clearTodos"></ToDoFooter>
      </div>
    </div>
  </div>
</template>

<script>

import ToDoFooter from "./components/ToDoFooter";
import ToDoHead from "./components/ToDoHead";
import ToDoList from "./components/ToDoList";

export default {
  name: 'App',
  data() {
    return {
      todos: [
        {
          id: '001',
          title: 'vue',
          done: true
        }, {
          id: '002',
          title: 'java',
          done: false
        }, {
          id: '003',
          title: 'mysql',
          done: false
        }
      ]
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    checkToDo(id) {
      this.todos.forEach((todo) => {
        if (todo.id == id) {
          todo.done = !todo.done
        }
      })
    },
    updateToDoById(id,title) {
      this.todos.forEach((todo) => {
        if (todo.id == id) {
          todo.title = title
        }
      })
    },
    deleteToDoById(id) {
      this.todos = this.todos.filter((t) => t.id !== id)
    },
    checkedAll(checked){
      this.todos.forEach((todo)=>todo.done=checked)
    },
    clearTodos() {
      this.todos = this.todos.filter((t) => !t.done)
    }
  },
  components: {
    ToDoFooter, ToDoHead, ToDoList
  },
  mounted() {
    this.$bus.$on('checkToDo',this.checkToDo)
    this.$bus.$on('deleteToDoById',this.deleteToDoById)
    this.$bus.$on('updateToDoById',this.updateToDoById)
  },
  beforeDestroy() {
    this.$bus.$off('checkToDo')
    this.$bus.$off('deleteToDoById')
    this.$bus.$off('updateToDoById')
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: #0db4f1;
  border: 1px solid #61dac4;
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
