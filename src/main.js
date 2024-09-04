import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import TagsInput from "./components/TagsInput.vue";
import TodoList from "./components/TodoList.vue";
import PickColor from "./components/PickColor.vue";
import FormRegister from "./components/FormRegister.vue";

// Register Components Global
const app = createApp(App);
app.component("tags-input", TagsInput);
app.component("todo-list", TodoList);
app.component("pick-color", PickColor);
app.component("form-register", FormRegister).mount("#app");
