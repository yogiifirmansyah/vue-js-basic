<template>
  <button @click="products.push({ id: 4, name: 'Produk D', price: 200 })">Tambah Produk</button>
  <ul>
    <li v-for="product in products" :key="product.id">{{ product.name }} - ${{ product.price }}</li>
  </ul>
  <p>Diskon: {{ discount }}%</p>
  <p>Total Harga: ${{ totalPrice }}</p>
  <p>Total Setelah Diskon: ${{ discountedTotal }}</p>
</template>
<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: "Produk A", price: 50 },
        { id: 2, name: "Produk B", price: 100 },
        { id: 3, name: "Produk C", price: 150 },
      ],
      discount: 10,
    };
  },
  computed: {
    totalPrice() {
      return this.products.reduce((sum, product) => sum + product.price, 0);
    },
    discountedTotal() {
      return this.totalPrice - this.totalPrice * (this.discount / 100);
    },
  },
};
</script>
<style></style>
