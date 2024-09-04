<template>
  <form @submit.prevent="submitForm">
    <label for="name">Nama:</label>
    <input id="name" v-model.trim="name" placeholder="Masukkan nama Anda" />

    <label for="email">Email:</label>
    <input id="email" v-model="email" type="email" placeholder="Masukkan email Anda" />

    <label for="age">Usia:</label>
    <input id="age" v-model.number="age" type="number" placeholder="Masukkan usia Anda" />

    <label>Jenis Kelamin:</label>
    <input type="radio" v-model="gender" value="Pria" /> Pria <input type="radio" v-model="gender" value="Wanita" /> Wanita

    <label>Bahasa yang Dikuasai:</label>
    <select v-model="languages" multiple>
      <option>Bahasa Indonesia</option>
      <option>Bahasa Inggris</option>
      <option>Bahasa Jepang</option>
    </select>

    <label> <input type="checkbox" v-model="agreed" /> Saya setuju dengan syarat dan ketentuan. </label>

    <button type="submit">Daftar</button>
  </form>

  <h2>Data yang Dimasukkan:</h2>
  <p>Nama: {{ name }}</p>
  <p>Email: {{ email }}</p>
  <p>Usia: {{ age }}</p>
  <p>Jenis Kelamin: {{ gender }}</p>
  <p>Bahasa yang Dikuasai: {{ languages.join(", ") }}</p>
  <p>Status Persetujuan: {{ agreed ? "Setuju" : "Belum Setuju" }}</p>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      age: null,
      gender: "",
      languages: [],
      agreed: false,
    };
  },
  methods: {
    submitForm() {
      if (this.name && this.email && this.age && this.gender && this.agreed) {
        alert("Form berhasil dikirim!");
      } else {
        alert("Tolong isi semua data dan setujui syarat dan ketentuan.");
      }
    },
  },
};
</script>

<style></style>
