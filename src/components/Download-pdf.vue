<template>
  <div class="download">
    <v-btn
      class="download-button"
      :loading="isDownloading"
      @click="startDownload"
      :disabled="isDownloading"
    >
      <template v-slot:default>
        <v-icon left v-if="!isDownloading">mdi-download</v-icon>
        <v-icon left v-else>mdi-loading mdi-spin</v-icon>
        {{ buttonLabel }}
        <v-progress-circular
          :rotate="-90"
          :size="1"
          :width="5"
          :value="downloadProgress"
          class="ma-6"
          color="green"
        >
          {{ downloadProgress }}%
        </v-progress-circular>
      </template>
    </v-btn>
    <div
      style="
        width: 95%;
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
      "
    >
      <v-progress-linear
        class="download-progress ma-4"
        color="purple"
        indeterminate
        rounded
        v-if="isDownloading"
        :value="downloadProgress"
        height="5"
      ></v-progress-linear>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pdfPath: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isDownloading: false,
      downloadProgress: 0,
    };
  },
  computed: {
    buttonLabel() {
      return this.isDownloading ? "Baixando..." : "Download PDF";
    },
  },
  methods: {
    startDownload() {
      this.isDownloading = true;
      this.downloadProgress = 0;

      setTimeout(() => {
        // Simulating download progress (for demonstration purposes only)
        const interval = setInterval(() => {
          this.downloadProgress += 10;
          if (this.downloadProgress >= 100) {
            clearInterval(interval);
            this.isDownloading = false;
            this.downloadPDF();
          }
        }, 100);
      }, 500);
    },
    downloadPDF() {
      const link = document.createElement("a");
      link.href = this.pdfPath;
      link.download = this.pdfPath.substring(this.pdfPath.lastIndexOf("/") + 1);
      link.click();
    },
  },
};
</script>

<style>
.download {
  margin-bottom: 1em;
}
.download-button {
  margin-right: 10px;
  width: 290px;
  height: 50px !important;
}

.download-progress .v-progress-linear__background {
  background: radial-gradient(
    53.16% 33.49% at 50% 18.5%,
    #7d60f0 0%,
    #0b0022 100%
  ) !important;
}

.download-progress .v-progress-linear__buffer {
  background: radial-gradient(
    53.16% 33.49% at 50% 18.5%,
    #7d60f0 0%,
    #0b0022 100%
  ) !important;
}

.download-progress .v-progress-linear__indeterminate {
  background-color: purple !important;
}
</style>
