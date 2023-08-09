<template>
  <v-btn v-show="isAuthenticated" @click="logout" icon>
    <v-icon class="icon-large" color="white">mdi-logout</v-icon>
  </v-btn>
</template>

<script>
import { logout, getCurrentUser } from "../auth";

export default {
  computed: {
    isAuthenticated() {
      return !!getCurrentUser();
    },
  },
  methods: {
    logout() {
      logout();
      localStorage.removeItem("currentUser");
      // Redirecionar para a página de login ou qualquer outra página necessária após o logout
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.icon-large {
  font-size: 32px;
}
</style>
