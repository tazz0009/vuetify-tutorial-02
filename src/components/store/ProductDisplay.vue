<template>
  <div>
    <h3>Products</h3>
    <v-row>
      <v-col
        sm="6"
        md="4"
        v-for="(product, i) in $store.getters['cart/products']"
        :key="i"
      >
        <VerticalProduct :product="product" :addToCart="addToCart" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VerticalProduct from "../cards/VerticalProduct";

export default {
  name: "ProductDisplay",
  components: {
    VerticalProduct,
  },
  methods: {
    addToCart(index, quantity = 1) {
      this.$store.commit("cart/addItemToCart", { itemId: index, quantity });
      this.$store.commit("cart/updateSnackbar", { show: true });
    }
  },
};
</script>

<style></style>
