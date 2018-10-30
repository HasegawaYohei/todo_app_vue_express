<template>
  <div class="hello">
    <h1>Todo App</h1>
    <form>
      <p>
        <input type="text" v-model="newTodo">
        <button class="btn btn-sm btn-success" @click="addTodo()">ADD TASK</button>
      </p>
    </form>
    <div class="task-list">
      Todo List:
      <label class="task-list__item" :class="{ 'task-list__item--checked': todo.done }" v-for="todo in todos">
        <input type="checkbox" v-model="todo.editing">
        <input v-if="todo.editing" v-model="todo.name" @keyup.enter="updateTodo(todo)">
        <span v-else>{{ todo.name }}</span>
        <button class="btn btn-sm btn-primary" @click="done(todo)">Done</button>
      </label>
    </div>
    <div style="margin-top: 15px;">
      Done List:
      <div class="task-list">
        <label class="task-list__item" v-for="doneItem in doneItems">
          <span> {{ doneItem.name }} </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { throws } from 'assert';
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api'
});

export default {
  name: 'HelloWorld',
  data () {
    return {
      todos: [],
      doneItems: [],
      newTodo: '',
    }
  },
  methods: {
    fetchData() {
      (async () => {
        const todos = (await axiosInstance.get()).data;
          this.todos = todos.filter(v => !v.done).map(v => {
            return {
              ...v,
              editing: false
            }
          });
          this.doneItems = todos.filter(v => v.done);
      })();
    },
    addTodo() {
      (async () => {
        const name = this.newTodo && this.newTodo.trim();
        if (!name) {
          return;
        }

        const todo = (await axiosInstance.post('/create', {
          name
        })).data[0];

        this.todos.push(todo);
        this.newTodo = '';
      })();
    },
    done(todo) {
      (async () => {
        todo.done = true;
        this.todos = this.todos.filter(v => todo.id !== v.id);
        this.doneItems.push(todo);
        const todos = await axiosInstance.patch('/update', {
          ...todo
        });
      })();
    },
    updateTodo(todo) {
      (async () => {
        const id   = todo.id;
        const name = todo.name

        todo.editing = !todo.editing;

        axiosInstance.patch('/update', {
          id,
          name
        });
      })();
    }
  },
  created () {
    this.fetchData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin flex-vender() {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
}
.task-list {
  @include flex-vender;
  margin: 15px, 0;
  flex-direction: column;
  align-items: center;
  &__item {
    width: 270px;
    text-align: left;
    $element: #{&};
    &--checked {
      @extend #{$element};
      color: #85a6c6;
    }
  }
}
</style>

