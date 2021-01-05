import products from "./products";

const state = () => ({
  products,
  snackbar: {
    show: false,
    variant: "success",
    message: "Success! Item added to the cart.",
  },
  cart: [],
});

// getters
const getters = {
  products(state) {
    return state.products;
  },
  popularProducts(state) {
    return state.products.slice(0, 3);
  },
  snackbar(state) {
    return state.snackbar;
  }
};

// actions
const actions = {};

// mutations
const mutations = {
  addItemToCart(state, payload) {
    const { itemId, quantity } = payload;
    const idx = state.cart.findIndex((product) => product.itemId === itemId);
    if (idx === -1) {
      state.cart.push({ itemId, quantity });
    } else {
      state.cart[idx].quantity += 1;
    }
  },

  updateSnackbar(state, payload) {
    const { show } = payload;
    state.snackbar.show = show;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
