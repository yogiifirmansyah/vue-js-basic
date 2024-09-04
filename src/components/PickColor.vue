<template>
  <form @submit.prevent="greetUser($event)">
    <label for="name">Nama:</label>
    <input id="name" v-model="name" @keydown.enter="greetUser" placeholder="Masukkan nama Anda" />

    <label for="color">Warna Favorit:</label>
    <select id="color" v-model="favoriteColor">
      <option disabled value="">Pilih warna</option>
      <option>Merah</option>
      <option>Biru</option>
      <option>Hijau</option>
    </select>

    <button type="submit">Sapa</button>
  </form>

  <p v-if="greetingMessage">{{ greetingMessage }}</p>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      favoriteColor: "",
      greetingMessage: "",
    };
  },
  methods: {
    greetUser(event) {
      if (this.name && this.favoriteColor) {
        this.greetingMessage = `Halo, ${this.name}! Warna favoritmu adalah ${this.favoriteColor}.`;
        console.log(event);
      } else {
        this.greetingMessage = "Tolong masukkan nama dan pilih warna favorit.";
      }
    },
  },
};
</script>

<style></style>
