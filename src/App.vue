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

  <!-- Working with methods -->
  <h1>Discount with Method</h1>
  <discount-method />
  <hr />

  <!-- Style and Class Binding -->
  <h1>Button Change Style</h1>
  <button-change-style />
  <hr />

  <!-- Computed Properties -->
  <h1>Discount with Computed</h1>
  <discount-computed />
  <hr />
</template>

<style scoped>
h1 {
  color: gray;
}
</style>
