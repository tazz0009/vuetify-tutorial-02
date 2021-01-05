import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Store from "../views/Store";
import Cart from "../views/Cart";
import Checkout from "../views/Checkout";
import ThankYou from "../views/ThankYou";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/store",
    name: "store",
    component: Store
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout
  },
  {
    path: "/thankYou",
    name: "thankYou",
    component: ThankYou
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
