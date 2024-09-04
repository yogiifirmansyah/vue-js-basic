import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import TagsInput from "./components/TagsInput.vue";
import TodoList from "./components/TodoList.vue";
import PickColor from "./components/PickColor.vue";
import FormRegister from "./components/FormRegister.vue";
import DiscountMethod from "./components/DiscountMethod.vue";
import ButtonChangeStyle from "./components/ButtonChangeStyle.vue";
import DiscountComputed from "./components/DiscountComputed.vue";

// Register Components Global
const app = createApp(App);
app.component("tags-input", TagsInput);
app.component("todo-list", TodoList);
app.component("pick-color", PickColor);
app.component("form-register", FormRegister);
app.component("discount-method", DiscountMethod);
app.component("button-change-style", ButtonChangeStyle);
app.component("discount-computed", DiscountComputed).mount("#app");
