<template>
  <v-card outlined min-width="100%" class="mt-4 mb-5 pa-4">
    <div class="d-flex">
      <div>
        <v-img :src="product.image" width="120px" height="120px" />
      </div>
      <div class="d-flex flex-column justify-center">
        <v-card-title class="pt-0">
          {{ product.name }}
        </v-card-title>
        <v-card-subtitle>
          {{ product.price }}
        </v-card-subtitle>
        <v-card-actions>
          <v-btn color="error" outlined small @click="updateCart">
            <v-icon left small>fa-minus</v-icon>
            Remove from Cart</v-btn
          >
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    product: Object,
    updateCart: Function,
    btnAction: String,
    i: Number,
  },
};
</script>

<style></style>
