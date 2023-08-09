<template>
  <main>
    <v-container class="container">
      <span>BETFRED</span>
      <v-row class="row">
        <v-col v-for="project in items1" :key="project" class="card-container">
          <a :href="project.href" class="teste">
            <img class="v-card" :src="require(`@/assets/${project.img}`)" />
          </a>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="container">
      <span>GAMING REALMS - SLINGO</span>
      <v-row class="row">
        <v-col v-for="project in items2" :key="project" class="card-container">
          <a :href="project.href" class="a">
            <img class="v-card" :src="require(`@/assets/${project.img}`)" />
          </a>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="container">
      <span>GAMES</span>
      <v-row class="row">
        <v-col class="card-containers" v-for="project in items3" :key="project">
          <a :href="project.href" :class="project.class">
            <img class="v-card" :src="require(`@/assets/${project.img}`)" />
          </a>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "MySharp",
  data: () => ({
    items1: [
      {
        /*Betfred roulette*/
        href: " https://sharp-internal.globalgames.io/launch/v1/launch?gi=BFEUROULETTE01&pi=240&t=239b9592-00dd-43a2-9018-ba9519846ea3&v=Mobile&c=GBP&m=Real&d=Desktop&l=en-GB&fi=1&ci=1&a=0&gv=1.30.3&hurl=_portfolio:GameClose&lurl=https://app.example.com/lobby&durl=https://app.example.com/deposit&env=internal",
        img: "roulette.png",
      },
      {
        /*BLACKJACK*/
        href: "https://sharp-internal.globalgames.io/launch/v1/launch?gi=BFBLACKJACK01&pi=406&t=af7cfb48-4501-472e-83ed-326c0b18e495&v=Mobile&c=GBP&m=Real&d=Desktop&l=en-GB&fi=1&ci=1&a=0&gv=1.30.3&hurl=_portfolio:GameClose&lurl=https://app.example.com/lobby&durl=https://app.example.com/deposit&env=internal",
        img: "blackjack.png",
      },
      {
        /*CLEOPATRANEEDLE*/
        href: "https://sharp-internal.globalgames.io/launch/v1/launch?gi=BFTHELASTHEIST01&pi=599&t=5f546ef8-7281-41ae-b6f5-3c2ecb4024b6&v=Mobile&c=GBP&m=Real&d=Desktop&l=en-GB&fi=1&ci=1&a=0&gv=0.0.18&hurl=_portfolio:GameClose&lurl=https://app.example.com/lobby&durl=https://app.example.com/deposit&env=internal",
        img: "cleoneedle.png",
      },
      {
        /*DIAMONDSANDDOLLARS*/
        href: "https://sharp-internal.globalgames.io/launch/v1/launch?gi=BFDIAMONDSANDDOLLARS01&pi=526&t=669a3828-151c-42fb-81ae-4dcb74bbce01&v=Mobile&c=GBP&m=Real&d=Desktop&l=en-GB&fi=1&ci=1&a=0&gv=1.30.10&hurl=_portfolio:GameClose&lurl=https://app.example.com/lobby&durl=https://app.example.com/deposit&env=internal",
        img: "ded.png",
      },
      {
        /*FRUITYBOOTY*/
        href: "https://sharp-internal.globalgames.io/launch/v1/launch?gi=BFFRUITYBOOTY01&pi=818&t=865ce1d7-f4f9-4a15-976c-640826c0b1ab&v=Mobile&c=GBP&m=Real&d=Desktopv&l=en-GB&fi=1&ci=1&a=0&gv=1.30.6&hurl=_portfolio:GameClose&lurl=https://app.example.com/lobby&durl=https://app.example.com/deposit&env=internal",
        img: "fruity.png",
      },
      {
        // jaweloftheisle
        href: "https://sharp-internal.globalgames.io/launch/v1/launch?gi=BFJEWELOFTHEISLE01&pi=884&t=6b5d4431-19f7-4829-842d-0f8fec4e7238&v=Mobile&c=GBP&m=Real&d=Desktop&l=en-GB&fi=1&ci=1&a=0&gv=1.32.0&hurl=_portfolio:GameClose&lurl=https://app.example.com/lobby&durl=https://app.example.com/deposit&env=internal",
        img: "jewell.png",
      },
      {
        /*CLEOPATRAS ASS*/
        href: "https://sharp-internal.globalgames.io/launch/v1/launch?gi=BFCLEOPATRASASS01&pi=734&t=d2aa387c-104b-47e9-b4a9-240b7893ddbb&v=Mobile&c=GBP&m=Real&d=Desktop&l=en-GB&fi=1&ci=1&a=0&gv=1.30.19&hurl=_portfolio:GameClose&lurl=https://app.example.com/lobby&durl=https://app.example.com/deposit&env=internal",
        img: "cleoass.png",
      },
      {
        /*armed*/
        href: "https://sharp-internal.globalgames.io/launch/v1/launch?gi=BFARMEDBANDITS01&pi=804&t=04cb9612-5c45-490f-bae1-a7468ff6edd0&v=Mobile&c=GBP&m=Real&d=Desktop&l=en-GB&fi=1&ci=1&a=0&gv=1.30.10&hurl=_portfolio:GameClose&lurl=https://app.example.com/lobby&durl=https://app.example.com/deposit&env=internal",
        img: "armed.png",
      },
      {
        /*CHANDANTHEMAGNIFICENT*/
        href: "https://sharp-internal.globalgames.io/launch/v1/launch?gi=BFCHANDANTHEMAGNIFICENT01&pi=838&t=94b88e9e-fc42-4af0-bcad-22f39267c653&v=Mobile&c=GBP&m=Real&d=Desktop&l=en-GB&fi=1&ci=1&a=0&gv=1.30.12&hurl=_portfolio:GameClose&lurl=https://app.example.com/lobby&durl=https://app.example.com/deposit&env=internal",
        img: "chandan.png",
      },
      {
        /*DIAMONDGEEZER*/
        href: "https://sharp-internal.globalgames.io/launch/v1/launch?gi=BFDIAMONDGEEZER01&pi=502&t=e0822c3e-c481-41a6-8c6b-184f5b334a1b&v=Mobile&c=GBP&m=Real&d=Desktop&l=en-GB&fi=1&ci=1&a=0&gv=1.40.0&hurl=_portfolio:GameClose&lurl=https://app.example.com/lobby&durl=https://app.example.com/deposit&env=internal",
        img: "diamond.png",
      },
    ],
    items2: [
      {
        /*shark-week*/ href: "https://slingo-test.globalgames.io/frame/index.html?device=tablet&gamePath=shark-week",
        img: "Slingo-SW.png",
      },
      {
        /*golden-envelope*/
        href: "https://slingo-test.globalgames.io/frame/index.html?gamePath=golden-envelope",
        img: "Slingo-GE.png",
      },
      {
        /*cleopatra*/
        href: "https://slingo-test.globalgames.io/frame/index.html?gamePath=cleopatra",
        img: "Slingo-Cleo.png",
      },
    ],
    items3: [
      {
        /*esporte da sorte*/ href: "http://gg-double-sandbox.globalgames.io/casino/",
        img: "EdS-double.png",
        class: "EDS",
      },
      {
        /*estrelabet*/ href: "https://gg-sandbox.globalgames.io/crash-client/star.html?token=1da04494-c0b2-40de-aa5d-5ef302f063f5&url=https%3a%2f%2fgg-sandbox.globalgames.io%2fcrash-server%2f",
        img: "EB-Crash.png",
        class: "EB",
      },
    ],
  }),
});
</script>
<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

@media (min-width: 300px) {
  .v-card {
    width: 170px;
    height: 95px;
  }
  .container {
    padding-top: 39px !important;
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
