<template>
  <div class="home">
    <Header />
    <PopularProducts />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/home/Header";
import PopularProducts from "@/components/home/PopularProducts";
import Footer from "@/components/home/Footer";

export default {
  name: "Home",
  components: {
    Header,
    PopularProducts,
    Footer
  }
};
</script>
