<template>
  <div>
    <v-card outlined>
      <v-card-title>
        Checkout Box
      </v-card-title>
      <v-card-text>
        <v-text-field label="name"></v-text-field>
        <v-text-field label="email"></v-text-field>
        <p>Total : $999</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="goToCheckout">
          Checkout
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    checkoutForm: null,
    nameRules: [],
    name: "",
    emailRules: [],
    email: "",
  }),
  methods: {
    goToCheckout() {
      // console.log("goToCheckout");
      this.$router.push({ name: "checkout" });
    },
  },
};
</script>

<style></style>
