<template>
  <div>
    <v-row v-for="(product, i) in $store.getters['cart/products']" :key="i" class="px-3">
      <HorizontalProduct :product="product" :updateCart="removeFromCart" />
    </v-row>
  </div>
</template>

<script>
import HorizontalProduct from "../cards/HorizontalProduct";

export default {
  name: "ProductList",
  components: {
    HorizontalProduct,
  },
  methods: {
    removeFromCart() {
      console.log('removeFromCart');
    }
  }
};
</script>

<style></style>
