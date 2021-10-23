<template>
  <div id="app">
    <Navbar />

    <router-view id="view" />

    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
}

#view {
  min-height: calc(100vh);
  position: relative;
  top: 64px;
}

</style>
