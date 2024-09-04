import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import TagsInput from "./components/TagsInput.vue";
import TodoList from "./components/TodoList.vue";

// Register Components Global
const app = createApp(App);
app.component("tags-input", TagsInput).component("todo-list", TodoList).mount("#app");
