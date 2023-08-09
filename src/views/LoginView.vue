<template>
  <div class="login-container">
    <div class="card">
      <h2 class="title">Login</h2>

      <form @submit.prevent="submitForm" class="form">
        <v-text-field
          v-model="username"
          label="Username"
          required
          outlined
          class="input white--text"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          required
          outlined
          @click:append="showPassword = !showPassword"
          class="input white--text"
        ></v-text-field>
        <v-text-field
          v-model="viewer"
          label="Viewer Name"
          required
          outlined
          class="input white--text"
        ></v-text-field>
        <div>
          <button type="submit" class="button">Login</button>
        </div>
        <p v-if="error" class="errors">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { login, getCurrentUser } from "../auth";

export default {
  data() {
    return {
      username: "",
      password: "",
      viewer: "",
      error: "",
      showPassword: false,
    };
  },
  created() {
    if (getCurrentUser()) {
      this.$router.push("/dashboard");
    }
  },
  methods: {
    submitForm() {
      if (this.username === "" || this.password === "" || this.viewer === "") {
        this.error = "Please enter username, password, and viewer.";
      } else {
        login(this.username, this.password, this.viewer);
        const currentUser = getCurrentUser();
        if (currentUser) {
          // Autenticação bem-sucedida, redirecionar para a página de dashboard ou qualquer outra página necessária
          this.$router.push("/dashboard");
        } else {
          this.error = "Invalid Login. Please try again.";
        }
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
.login-container {
  overflow: hidden, auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: radial-gradient(
    53.16% 33.49% at 50% 18.5%,
    #7d60f0 0%,
    #0b0022 100%
  );
}

.card {
  width: 40%;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 16px;
  text-align: center;
  margin: 12px;
}

.title {
  font-size: 24px;
  margin-bottom: 16px;
  color: #333;
}

.form {
  display: flex;
  flex-direction: column;
}

.password-input {
  position: relative;
}

.password {
  padding-right: 30px;
}

.button {
  width: 100%;
  height: 40px;
  background-color: #7d60f0;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.errors {
  color: #ff3c00;
  margin: 4px;
  background-color: none !important;
}

@media (max-width: 767px) {
  .card {
    width: 100%;
  }
}
</style>
