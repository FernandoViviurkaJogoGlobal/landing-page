<template>
  <div class="styled">
    <!-- <ForImage /> -->
    Back to Home page
  </div>
</template>
<script lang="ts">
import Vue from "vue";
// import ForImage from "../components/ForImage.vue";

export default Vue.extend({
  name: "MyHome",

  components: {
    // ForImage,
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
