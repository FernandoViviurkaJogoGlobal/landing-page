<template>
  <div v-if="!isAuthenticated">
    <NonLoggedHeader />
  </div>
  <div v-else>
    <LoggedHeader />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getCurrentUser } from "../auth";
import LoggedHeader from "./LoggedHeader.vue";
import NonLoggedHeader from "./NonLoggedHeader.vue";
// import ExitButton from "./components/ExitButton.vue";
export default Vue.extend({
  name: "Header",
  // components: { ExitButton },
  data: () => ({}),
  components: {
    NonLoggedHeader,
    LoggedHeader,
  },
  computed: {
    isAuthenticated() {
      return getCurrentUser();
    },
  },
});
</script>
<style scoped></style>
