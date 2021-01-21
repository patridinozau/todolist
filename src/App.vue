<template>
  <todo-list list-name="My to-dos" />
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
};



</script>

