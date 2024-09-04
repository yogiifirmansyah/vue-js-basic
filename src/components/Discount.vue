<template>
  <input type="number" v-model="price" />
  <h1>Harga Produk: {{ price }}</h1>
  <input type="discount" v-model="discount" />
  <h2>Diskon: {{ discount }}%</h2>
  <p>Total Setelah Diskon: {{ discountedPrice() }}</p>
  <button @click="applyDiscount">Terapkan Diskon</button>
</template>

<script>
export default {
  data() {
    return {
      price: 0,
      discount: 0,
    };
  },
  methods: {
    discountedPrice() {
      return this.price - (this.price * this.discount) / 100;
    },
    applyDiscount() {
      alert(`Harga setelah diskon: ${this.discountedPrice()}`);
    },
  },
};
</script>
<style></style>
