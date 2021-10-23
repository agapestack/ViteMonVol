<template>
  <div class="home">
    <div class="img-wrapper">
      <span class="hero-title">Switzerland</span>

      <span class="hero-subtitle">Découvrir la liberté</span>

      <button class="hero-btn">Explorer Maintenant!</button>
    </div>

    <div class="form-where">
      <span class="form-catchphrase">Ou voulez-vous partir?</span>

      <form action="#" method="POST">
        <input
          type="text"
          class="form-control"
          id="input-lieu"
          placeholder="Lieu"
        />

        <select class="form-select">
          <option selected>Mode de Transport</option>
          <option value="1">Avion</option>
          <option value="2">Train</option>
          <option value="3">Bateau</option>
        </select>

        <button class="btn btn-primary">Partez</button>
      </form>
    </div>

    <div class="popular">
      <h1>Destination populaire</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {

  },
};
</script>

<style scoped>
.home {
}

.img-wrapper {
  width: 100vw;
  height: 70vh;
  color: white;

  background-image: url("../assets/switzerland.jpg");
  background-size: 100vw 80vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}

.hero-title {
  font-size: 5rem;
  font-family: "Caveat", cursive;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-style: italic;
}

.hero-btn {
  margin: 1.5rem;
  padding: 0.75rem;
  border: none;
  border-radius: 10px;
  background-color: orange;
  color: white;
}

.form-where {
  height: 100px;
  width: 100vw;
  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

.form-where form {
  display: flex;
}

.form-catchphrase {
  margin: 1.5rem;
}

.popular {
  display: ;
}
</style>
