<template>
  <input type="text" v-model="newTask" placeholder="Tambahkan tugas baru" />
  <button @click="addTask">Tambah</button>

  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <span :class="{ completed: task.completed }">{{ task.name }}</span>
      <input type="checkbox" @click="toggleTask(index)" />
      <button @click="removeTask(index)">&times;</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask !== "") {
        this.tasks.push({
          name: this.newTask,
          completed: false,
        });
        this.newTask = "";
      }
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
