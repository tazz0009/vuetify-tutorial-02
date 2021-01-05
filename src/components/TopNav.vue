<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>
        Awesome shop
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="hidden-sm-and-up">
        <v-btn @click.stop="drawer = !drawer">Menu</v-btn>
      </span>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text small>
          <v-icon left>fa-home</v-icon>
          Home
        </v-btn>
        <v-btn to="store" text small>
          <v-icon left>fa-shopping-basket</v-icon>
          Store
        </v-btn>
        <v-btn to="cart" text small>
          <v-icon left>fa-shopping-cart</v-icon>
          Cart
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              Sandra Adams
            </v-list-item-title>
            <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon small>
            <v-icon> fa-{{ item.icon }} </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: "Home", link: "/", icon: "home" },
      { title: "Store", link: "store", icon: "shopping-basket" },
      { title: "Cart", link: "cart", icon: "shopping-cart" }
    ]
  })
};
</script>

<style></style>
