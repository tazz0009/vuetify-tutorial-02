<template>
  <v-stepper-content step="3">
    <v-list>
      <v-subheader class="title">
        Review Order
      </v-subheader>
      <v-list-item-group>
        <v-list-item v-for="(value, name) in data" :key="name">
          <v-list-item-content>
            <v-list-item-title> {{ name }}:{{ value }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-btn color="primary" @click="submitOrder">Submit</v-btn>
    <v-btn text @click="previous">Go Back</v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  props: {
    previous: Function,
    submitOrder: Function,
    data: Object,
  },
};
</script>

<style></style>
