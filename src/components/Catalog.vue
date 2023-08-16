<template>
  <main>
    <v-container style="padding: 0px !important">
      <v-row style="justify-content: center; margin: 8px">
        <span class="text-alert"
          >This page holds private and confidential information belonging to
          Jogo Global Ltd and may not be disclosed to any third party or used
          for any other purpose without written permission from Jogo Global
          Ltd.</span
        >

        <span class="text-alert">
          This page and its contents may not be reproduced, redistributed,
          passed on, or the contents otherwise divulged, directly or indirectly,
          to any other person or published in whole or in part for any purpose
          without written permission from Jogo Global Ltd ©</span
        >
      </v-row>
    </v-container>

    <template>
      <!-- <v-tabs
        v-model="tab"
        background-color="deep-purple accent-4 container"
        center-active
        dark
        centered
      >
        <v-tab v-for="item in items" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs> -->

      <div style="background-color: transparent">
        <div v-for="(item, idx) in items" :key="idx" :id="item.tab">
          <v-container class="container">
            <span class="span">{{ item.description }}</span>
            <v-row class="row">
              <v-col
                class="card-container"
                v-for="project in item.content"
                :key="project"
              >
                <a :href="project.href">
                  <v-chip
                    v-if="project.hasChip"
                    class="chip-card"
                    color="primary"
                    overlap
                  >
                    <span>{{ project.chip || "" }}</span>
                  </v-chip>
                  <img
                    class="v-card"
                    :src="require(`@/assets/${project.img}`)"
                  />
                </a>
              </v-col>
            </v-row>
            <div v-if="item.hasPdf">
              <div>
                <download-pdf-vue :pdf-path="item.pdfLink"></download-pdf-vue>
              </div>
            </div>
            <div v-if="item.isCommingSoon">
              <div>
                <div><video-grid /></div>
              </div>
            </div>
          </v-container>
        </div>
      </div>
    </template>
  </main>
</template>
<script lang="ts">
import Vue from "vue";
import DownloadPdfVue from "./Download-pdf.vue";
import VideoGrid from "./VideoGrid.vue";
export default Vue.extend({
  components: { VideoGrid, DownloadPdfVue },
  name: "Catalog",
  data: () => ({
    tab: null,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    pdfPathJogo: "",
    items: require("@/data/catalog.json"),
    panel: [0, 1],
    disabled: false,
    readonly: false,
  }),
  methods: {
    getLink(project: any) {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      return isMobile
        ? project.href.replace("&v=Mobile", "&v=Mobile&isp=1")
        : project.href.replace("&v=Mobile", "&v=Desktop");
    },
  },
});
</script>
<style scoped>
.text-alert {
  font-size: 14px;
}
.span {
  margin: 8px;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.row {
  margin-top: 8px;
}

.v-card {
  height: auto;
  width: auto;
  max-height: 362px;
  min-height: 94.71px;
  max-width: 502px;
  min-width: 131.14px;
  margin-right: 1%;
  background-size: cover;
  background-position: center;
}
.v-card:hover {
  opacity: 55%;
  transition: 0.5s ease;
}

.chip-card {
  display: flex;
  position: absolute;
  width: 60px;
  margin: 10px;
}

@media (min-width: 300px) and (max-width: 700px) {
  .text-alert {
    font-size: 11px;
  }

  .v-card {
    width: 280px;
    height: 150px;
  }
  .container {
    padding-top: 39px !important;
  }
  .chip-card {
    display: flex;
    position: absolute;
    width: 50px;
    height: 25px;
    border-radius: 4px;
    text-align: center;
    font-size: 9px;
    margin: 10px;
  }
  .row {
    margin-top: 33px;
  }
  .EDS {
    padding-left: auto;
  }
  .EB {
    padding-right: auto;
  }
}
@media (min-width: 1000px) and (max-width: 1880px) {
  .v-card {
    height: 363px;
    width: 502px;
  }
  .container {
    padding-top: 99px !important;
  }
  .row {
    margin-top: 50px;
  }
  .EDS {
    padding-left: auto;
  }
  .EB {
    padding-right: auto;
  }
}
@media (min-width: 1881px) and (max-width: 1920px) {
  .v-card {
    height: 363px;
    width: 502px;
  }
  .container {
    padding-top: 99px !important;
  }
  .row {
    margin-top: 50px;
  }
  .EDS {
    padding-left: 6.221em;
  }
  .EB {
    padding-right: 6.221em;
  }
}
</style>
