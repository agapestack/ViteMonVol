<template>
  <div class="auth-wrapper">
    <div class="auth auth-register">
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
      </div>
    </div>

    <div class="auth auth-login">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
};
</script>

<style scoped>
.auth-wrapper {
  margin: 0 auto;
  max-width: 1136px;
  max-height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.auth {
  /* max-width: 1136px; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  border: 1px solid black;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
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