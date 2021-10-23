<template>
  <div id="nav" data-aos="fade-down">
    <div class="nav-section nav-left">
      <a href="/">
        <div class="logo">
          <i class="far fa-compass" id="logo-svg"></i>
          <span id="logo-text">ViteMonVol</span>
        </div></a
      >
    </div>

    <div class="horizontal-separator"></div>

    <div class="nav-section nav-center">
      <a class="menu-link" href="#">Accueil</a>
      <a class="menu-link" href="#">Circuits</a>
      <a class="menu-link" href="#">À Propos</a>
      <a class="menu-link" href="#">Contacts</a>
    </div>

    <div class="horizontal-separator"></div>

    <div class="nav-section nav-right">
      <a href="#" style="color: #00acee"><i class="fab fa-twitter"></i></a>
      <a href="#" style="color: #3b5998"><i class="fab fa-facebook"></i></a>
      <a href="#" style="color: #db4a39"
        ><i class="fab fa-google-plus-g"></i
      ></a>
      <a href="#" style="color: #25d366"><i class="fab fa-whatsapp"></i></a>
    </div>
  </div>
</template>

<script>
window.addEventListener("scroll", (e) => {
  const nav = document.querySelector("#nav");
  if (window.pageYOffset > 0) {
    nav.classList.add("add-shadow");
  } else {
    nav.classList.remove("add-shadow");
  }
});
export default {};
</script>

<style scoped>
#nav {
  width: 100vw;
  height: 64px;
  display: flex;
  background: white;
  position: fixed;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
}

a i {
  transition: transform 0.2s;
  margin: 0.5rem;
}

a i:hover {
  transform: scale(1.2);
}

.nav-section {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}

.nav-left {
  padding: 0.5rem 1rem;
  font-size: 2rem;
  width: 25%;
}

.nav-center {
  font-size: 1.25rem;
  display: flex;
  justify-content: flex-start;
  width: 50%;
}

.nav-center a {
    color: black;
    transition: transform .2s;
}

.nav-center a:hover {
  transform: scale(1.1);
}

.nav-right {
  width: 25%;
}

.menu-link {
  margin: 1rem;
}

.logo {
  transition: transform 0.2s;
}

.logo:hover {
  transform: scale(1.1);
}

a:link {
  text-decoration: none !important;
}

#logo-svg {
  color: orange;
}

#logo-text {
  font-family: "Caveat", cursive;
  font-weight: 700;
  color: black;
  text-decoration: none;
}

.horizontal-separator {
  margin: 2rem;
  width: 1px;
  height: 32px;
  background: rgba(128, 128, 128, 0.418);
}

.add-shadow {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
}
</style>