<template>
  <div>
    <AddTodo />
    <FilterTodos />
    <TodosSec />
  </div>
</template>
<script>
const AddTodo = () =>
  import(
    /* webpackChunkName: "AddTodo" */ '@/components/AddTodo.vue'
  );
  const FilterTodos = () =>
  import(
    /* webpackChunkName: "FilterTodos" */ '@/components/FilterTodos.vue'
  );
  const TodosSec = () =>
  import(
    /* webpackChunkName: "TodosSec" */ '@/components/TodosSec.vue'
  );
  
  
export default {
  name: 'becomePartner',
  components: {
    AddTodo,
    FilterTodos,
    TodosSec
  },
 
}
</script>
<style scoped>
</style>