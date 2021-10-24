<template>
  <div class="auth-wrapper">
    <div
      class="auth auth-register"
      v-if="showRegister"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <div class="form-register form">
        <h1>Inscription</h1>
        <hr />

        <div class="form-input">
          <label for="email"><b>Email</b></label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />
        </div>
        <div class="form-input">
          <label for="psw"><b>Mot de Passe</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />
        </div>
        <div class="form-input">
          <label for="psw-repeat"><b>Confirmer le Mot de Passe</b></label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          />
          <hr />
        </div>

        <button type="submit" class="registerbtn">Validation</button>

        <span id="switch-auth" @click="switchAuth"
          >Déjà un compte? Connectez-vous!</span
        >
      </div>
    </div>

    <div
      class="auth auth-login"
      v-else
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <div class="form-login form">
        <h1>Connexion</h1>
        <hr />

        <div class="form-input">
          <label for="email"><b>Email</b></label>
          <input
            type="text"
            placeholder="email"
            name="email"
            id="email"
            required
          />
        </div>

        <div class="form-input">
          <label for="psw"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />
        </div>

        <button type="submit" class="loginbtn">Valider</button>

        <span id="switch-auth" @click="switchAuth"
          >Pas encore de compte? Inscrivez-vous maintenant!</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      showRegister: false,
    };
  },
  methods: {
    switchAuth() {
      this.showRegister = !this.showRegister;
    },
  },
};
</script>

<style scoped>
#switch-auth {
  margin: 0.5rem;
  margin-top: 1.5rem;
}

#switch-auth:hover {
  text-decoration: underline;
}

.auth-wrapper {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-wrapper::after {
  content: "";
  background: url("../assets/auth_background.jpg");
  background-size: cover;
  opacity: 0.7;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}

.auth {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  opacity: 1 !important;
  background-color: white;
  border: 1px solid orange;
  box-shadow: 4px 4px orange;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

input {
  border: 1px solid rgba(128, 128, 128, 0.219);
  border-radius: 3px;
}

.form-input {
  margin: 1rem;
  display: flex;
  flex-direction: column;
}

.auth-register {
  columns: 0;
}

.auth-login {
  columns: 1;
}
</style>