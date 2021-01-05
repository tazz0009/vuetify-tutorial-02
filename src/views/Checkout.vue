<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step step="1" :complete="step > 1" />
            <v-divider />
            <v-stepper-step step="2" :complete="step > 2" />
            <v-divider />
            <v-stepper-step step="3" />
          </v-stepper-header>
          <v-stepper-items>
            <ContactInfo :data="data" :rules="rules" :next="next" />
            <ShoppingInfo
              :data="data"
              :rules="rules"
              :next="next"
              :previous="previous"
            />
            <Review
              :data="data"
              :submitOrder="submitOrder"
              :previous="previous"
            />
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContactInfo from "../components/checkout/ContactInfo";
import ShoppingInfo from "../components/checkout/ShoppingInfo";
import Review from "../components/checkout/Review";

export default {
  name: "Checkout",
  components: { ContactInfo, ShoppingInfo, Review },
  data: () => ({
    step: 1,
    checkoutForm: false,
    data: {
      email: "",
      name: "",
      phone: "",
      street: "",
      state: "",
      zip: "",
    },
    rules: {
      required: (value) => !!value || "Required",
      zip: (value) => value.length == 5 || "Must be five characters",
      email: (value) => /.+@.+\..+/.test(value) || "E-mail must be valid",
      phone: (value) => {
        const pattern = /\d{10}/;
        return pattern.test(value) || "Invalid phone number.";
      },
    },
  }),
  methods: {
    next() {
      this.step += 1;
    },
    previous() {
      this.step -= 1;
    },
    submitOrder() {
      this.$router.push({ name: 'thankYou' });
    },
  },
};
</script>
