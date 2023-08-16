<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4">
        <span>Crash </span>
        <div class="video">
          <video
            style="border-radius: 12px; margin-bottom: -10px"
            width="100%"
            height="100%"
            controls
          >
            <source
              :src="require('@/assets/video/Jogo-Crash.mp4')"
              type="video/mp4"
            />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </v-col>
      <!-- <v-col cols="12" sm="4">
        <span>Double</span>
        <div class="video">
          <video
            style="border-radius: 12px; margin-bottom: -10px"
            width="100%"
            controls
          >
            <source
              :src="require('@/assets/video/Jogo-Double.mp4')"
              type="video/mp4"
            />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </v-col> -->
      <!-- <v-col cols="12" sm="4">
        <span>Mines </span>
        <div class="video">
          <video
            style="border-radius: 12px; margin-bottom: -10px"
            width="100%"
            controls
          >
            <source
              :src="require('@/assets/video/Mines-EDS.mp4')"
              type="video/mp4"
            />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "VideoGrid",
};
</script>
<style scoped>
.video {
  border-radius: 12px;
  padding: 1px;
  height: auto;
  background-image: linear-gradient(
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
</style>
