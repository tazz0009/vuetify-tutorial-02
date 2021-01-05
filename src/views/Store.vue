<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3" offset-lg="2">
        <Sidebar />
      </v-col>
      <v-col cols="12" md="9" lg="7">
        <ProductDisplay />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Sidebar from "../components/store/Sidebar";
import ProductDisplay from "../components/store/ProductDisplay";
export default {
  name: "Store",
  components: { Sidebar, ProductDisplay }
};
</script>
