<template>
  <v-app>
    <Header />
    <v-main class="body" :class="{ isAuth: isAuthenticated }">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { getCurrentUser } from "./auth";
import Header from "./layouts/Header.vue";
// import ExitButton from "./components/ExitButton.vue";
export default Vue.extend({
  name: "App",
  // components: { ExitButton },
  data: () => ({}),
  components: {
    Header,
  },
  computed: {
    isAuthenticated() {
      return getCurrentUser();
    },
  },
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap");
* {
  overflow: hidden;
  font-family: "Inter", sans-serif;
}
.body {
  background: radial-gradient(
    53.16% 33.49% at 50% 18.5%,
    #7d60f0 0%,
    #0b0022 100%
  );
}

.isAuth {
  margin-top: 85px;
}
@media screen and (max-width: 768px) {
  .isAuth {
    margin-top: 75px;
  }
}
</style>
