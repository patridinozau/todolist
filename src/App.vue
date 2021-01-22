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

<style>
{
  font-family: Avenir, Helvetica, Arial, sans-serif
;
  text-align: center
;
  color: #fcba03
;
  margin: 60px
;
}
</style>
