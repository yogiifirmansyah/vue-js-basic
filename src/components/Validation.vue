<template>
  <input v-model="username" placeholder="Enter your username" />
  <p>{{ validationMessage }}</p>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      validationMessage: "",
    };
  },
  watch: {
    username(newVal) {
      if (newVal.length < 5) {
        this.validationMessage = "Username must be at least 5 characters long";
      } else {
        this.validationMessage = "";
      }
    },
  },
};
</script>
<style></style>
