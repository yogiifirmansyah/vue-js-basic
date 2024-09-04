<template>
  <button :class="buttonClass" :style="buttonStyle">Tombol Dinamis</button> <br /><br />
  <input v-model="buttonColor" placeholder="Masukkan warna (misal: red)" />
  <input v-model.number="buttonSize" placeholder="Masukkan ukuran font (px)" />
</template>

<script>
export default {
  data() {
    return {
      buttonColor: "blue",
      buttonSize: 16,
      isLarge: false,
      isDanger: false,
    };
  },
  computed: {
    buttonClass() {
      return {
        "is-large": this.isLarge,
        "is-danger": this.isDanger,
      };
    },
    buttonStyle() {
      return {
        color: this.buttonColor,
        fontSize: this.buttonSize + "px",
      };
    },
  },
};
</script>
<style></style>
