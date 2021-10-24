<template>
  <div id="app">
    <Navbar />

    <div class="fake-nav"></div>

    <main>
      <router-view id="view" />
    </main>

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

#app {
  display: grid;
  grid-template-rows: 64px 1fr 20vh;
}

#view {
  min-height: calc(100vh - 64px);
  overflow: scroll;
}

button {
  background-color: #fdbd0b;
  padding: 0.2rem;
  border: none;
  color: white;
  text-transform: uppercase;
  height: auto;
  width: inherit;
  box-shadow: 2px 2px rgba(77, 77, 77, 0.1);
  cursor: pointer;
  transition: transform 0.4s, box-shadow 0.4s;
}
</style>
