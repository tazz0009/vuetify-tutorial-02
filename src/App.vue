<template>
  <v-app>
    <TopNav />
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-snackbar
      v-model="$store.getters['cart/snackbar'].show"
      :multi-line="true"
      :right="true"
      :top="true"
      :timeout="6000"
      :color="$store.getters['cart/snackbar'].variant"
    >
      {{ $store.getters['cart/snackbar'].message }}
      <v-btn dark text @click="$store.commit('cart/updateSnackbar', { show: false })"
        >Close</v-btn
      >
    </v-snackbar>
    <!-- <Grid /> -->
  </v-app>
</template>

<script>
import TopNav from "./components/TopNav";
// import Grid from "./components/Grid";

export default {
  name: "App",

  components: {
    TopNav
    // Grid
  },

  data: () => ({
    //
  })
};
</script>
