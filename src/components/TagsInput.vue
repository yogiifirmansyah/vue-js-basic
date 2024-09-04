<template>
  <div class="tags-input-wrapper">
    <span class="tag-item" v-for="(tag, index) in tags" :key="index">
      {{ tag }}
      <a href="#" @click.prevent="removeTag(index)">&times;</a>
    </span>
    <input class="tag-input" :class="{ 'tag-exists': isTagExists }" type="text" v-model="textInput" @keydown.enter="addNewTag" @keydown.delete="removeLastTag" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      textInput: "",
      tags: [...this.selectedTags],
    };
  },
  props: {
    selectedTags: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    isTagExists() {
      return this.tags.includes(this.textInput);
    },
  },
  watch: {
    textInput(newVal) {
      if (newVal.indexOf(",") > -1) {
        this.textInput = this.textInput.slice(0, -1);
        this.addNewTag();
      }
    },
  },
  emits: ["change"],
  methods: {
    addNewTag() {
      if (this.textInput && !this.isTagExists) {
        this.tags.push(this.textInput);
        this.textInput = "";
        this.$emit("change", this.tags);
      }
    },

    removeTag(index) {
      this.tags.splice(index, 1);
      this.$emit("change", this.tags);
    },

    removeLastTag() {
      if (this.textInput.length == 0) {
        this.removeTag(this.tags.length - 1);
      }
    },
  },
};
</script>

<style scoped>
.tag-input.tag-exists {
  color: red;
  text-decoration: line-through;
}
.tags-input-wrapper {
  background: #fff;
  padding: 0.5em 0.5em 0em 0.5em;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 36px;
  box-sizing: border-box;
}
.tag-item {
  color: #212529;
  background-color: #eee;
  margin-right: 0.3em;
  margin-bottom: 0.5em;
  padding: 0.25em 0.4em;
  font-size: 75%;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 0.65em;
  padding-left: 0.6em;
}
.tag-item a {
  margin-left: 0.25em;
}
.tag-input {
  color: #495057;
  flex: 1;
  background: transparent;
  border: none;
}
.tag-input:focus {
  outline: none;
}
</style>
