<template>
  <div class="styled">
    <Catalog />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Catalog from "../components/Catalog.vue";

export default Vue.extend({
  name: "MyHome",

  components: {
    Catalog,
  },
  mounted() {
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
  },
});
</script>
<style scoped>
.styled {
  color: white;
  text-align: center;
}
@media (min-width: 300px) {
  .styled {
    font-size: 24px;
    font-family: "Inter";
    font-weight: 700;
  }
}

@media (min-width: 1100px) {
  .styled {
    font-size: 48px;
    font-family: "Inter";
    font-weight: 700;
  }
}
</style>
