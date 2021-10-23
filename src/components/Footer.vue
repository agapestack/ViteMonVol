<template>
  <footer id="footer">
    <div class="footer">
      <div class="social-links">
        <a href="#" style="color: #00acee"><i class="fab fa-twitter"></i></a>
        <a href="#" style="color: #3b5998"><i class="fab fa-facebook"></i></a>
        <a href="#" style="color: #db4a39"
          ><i class="fab fa-google-plus-g"></i
        ></a>
        <a href="#" style="color: #25d366"><i class="fab fa-whatsapp"></i></a>
      </div>

      <div class="vertical-separator"></div>

      <div class="credits">
        2021 - <strong><a href="#">Agape</a></strong>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
a {
  text-decoration: none;
}

a i {
  font-size: 1.5rem;
  margin: 0.5rem;
  transition: transform 0.2s;
}

a i:hover {
  transform: scale(1.3);
}

#footer {
  display: block;
}

.footer {
  width: 100vw;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 166, 0, 0.562);
  flex-direction: column;
}

.social-links {
  margin: 0.5rem;
}

.vertical-separator {
  height: 2px;
  width: 20vw;
  background: rgba(129, 21, 7, 0.829);
}

.credits {
  margin: 1rem;
}
</style>