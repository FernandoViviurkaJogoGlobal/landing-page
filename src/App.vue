<template>
  <v-app>
    <div class="header1">
      <span class="img-container"
        ><img class="img" src="../src/assets/JG-logo.png"
      /></span>
    </div>
    <div class="divider-line"></div>
    <v-main class="body">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import ExitButton from "./components/ExitButton.vue";
export default Vue.extend({
  name: "App",
  // components: { ExitButton },
  data: () => ({}),
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
.header1 {
  background: linear-gradient(0deg, #19042d, #19042d);
  color: white;
  text-align: center;
  max-height: 92px;
  overflow: hidden;
  display: flex;
  align-items: center; /* Centralizar verticalmente */
}

.divider-line {
  width: 100%;
  height: 4px;
  background: linear-gradient(
    90deg,
    #faac4b 0%,
    #f9a74a 5.12%,
    #f89947 11.12%,
    #f58142 17.55%,
    #f2613b 24.29%,
    #ed3732 31.2%,
    #ed3431 31.61%,
    #e8303d 36.89%,
    #da265b 46.33%,
    #c5168c 58.5%,
    #bc1e91 62.08%,
    #a3339d 68.87%,
    #7b55b2 76.95%,
    #4384cf 87.04%,
    #00bcf1 98.77%
  );
}

.img-container {
  flex: 1;
  display: flex;
  justify-content: center; /* Centralizar horizontalmente */
  margin: 29px;
}

.img {
  max-width: 300px;
  height: 33px;
  max-height: 33px;
}
</style>
