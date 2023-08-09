<template>
  <main>
    <v-row style="justify-content: center; margin: 8px">
      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel style="background-color: #2196f3 !important">
          <v-expansion-panel-header style="color: #fff !important"
            >Confidential Info</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <v-alert dense border="left" type="info" style="font-size: 12px">
              This page holds private and confidential information belonging to
              Jogo Global Ltd and may not be disclosed to any third party or
              used for any other purpose without written permission from Jogo
              Global Ltd.
            </v-alert>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="background-color: #2196f3 !important">
          <v-expansion-panel-header style="color: #fff !important"
            >No Sharing</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <v-alert dense border="left" type="info" style="font-size: 12px">
              This page and its contents may not be reproduced, redistributed,
              passed on, or the contents otherwise divulged, directly or
              indirectly, to any other person or published in whole or in part
              for any purpose without written permission from Jogo Global Ltd ©
            </v-alert>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <template>
      <v-tabs
        v-model="tab"
        background-color="deep-purple accent-4"
        center-active
        dark
        centered
      >
        <v-tab v-for="item in items" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" style="background-color: transparent">
        <v-tab-item v-for="item in items" :key="item.tab">
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
        </v-tab-item>
      </v-tabs-items>
    </template>
    <v-container>
      <span style="display: flex; justify-content: flex-end"
        ><exit-button /></span
    ></v-container>
  </main>
</template>
<script lang="ts">
import Vue from "vue";
import DownloadPdfVue from "./Download-pdf.vue";
import ExitButton from "./ExitButton.vue";
import VideoGrid from "./VideoGrid.vue";
export default Vue.extend({
  components: { VideoGrid, DownloadPdfVue, ExitButton },
  name: "MySharp",
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
    width: 170px;
    height: 95px;
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
