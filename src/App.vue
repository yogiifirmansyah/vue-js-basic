<script>
import TagsInput from "./components/TagsInput.vue";

// Register Components Local
export default {
  components: {
    // TagsInput,
  },
  data: () => ({
    jsFrameworks: ["react.js", "vue.js", "angular"],
    backendFrameworks: [],
  }),
  methods: {
    handleChange(tag) {
      this.jsFrameworks = [...tag];
    },
  },
};
</script>

<template>
  <h1>My Frameworks Tags</h1>
  <div>JS Frameworks: {{ jsFrameworks }}</div>
  <tags-input :selected-tags="jsFrameworks" @change="handleChange($event)" />
  <div>Backend Frameworks: {{ backendFrameworks }}</div>
  <tags-input :selected-tags="backendFrameworks" @change="backendFrameworks = [...$event]" />
  <hr />

  <!-- Directives and Attribute bindings -->
  <h1>Todo List</h1>
  <todo-list />
  <hr />

  <!-- Handling Events   -->
  <h1>Pick Color</h1>
  <pick-color />
  <hr />

  <!-- Two way bindings with v-model -->
  <h1>Form Register</h1>
  <form-register />
  <hr />
</template>

<style scoped>
h1 {
  color: gray;
}
</style>
