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
    handleChange(tags) {
      this.jsFrameworks = [...tags];
    },
  },
};
</script>

<template>
  <h1>My Frameworks!</h1>
  <div>JS Frameworks: {{ jsFrameworks }}</div>
  <tags-input :selected-tags="jsFrameworks" @change="handleChange" />
  <hr />
  <div>Backend Frameworks: {{ backendFrameworks }}</div>
  <tags-input :selected-tags="backendFrameworks" @change="backendFrameworks = [...$event]" />
</template>

<style scoped>
h1 {
  color: rgb(0, 119, 255);
}
</style>
