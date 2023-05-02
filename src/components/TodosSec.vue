<template>
  <div>
    <div>
      <v-container>
        <h3 class="text-center">TodosSec</h3>
        <div class="legends text-center mt-5 my-5">
          <span> Double click to mark as complete</span>
          <span>
            <span class="incomplete-box"></span> = Incomplete-box
          </span>
          <span>
            <span class="complete-box"></span> = Complete-box
          </span>
        </div>
      </v-container>
      <div class="todos">
        <div @dblclick="onDbClick(todo)" :key="todo.id" v-for="todo in allTodos" class="todo"
          v-bind:class="{'is-complete':todo.completed}">
          {{ todo.title }}
          <v-icon class="icon" v-on:click="deleteTodo(todo.id)">mdi-delete</v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'TodosSec',
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDbClick(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }
      this.updateTodo(updatedTodo);
    }
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box,
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
}

.complete-box {
  background: #35495e;
}

.incomplete-box {
  background: #41b883;
}

.is-complete {
  color: #fff;
  background: #35495e;
}

@media (max-width:500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>