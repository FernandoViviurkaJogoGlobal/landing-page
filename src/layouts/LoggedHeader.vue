<template>
  <header :class="{ isOpen: !this.menuOpen }">
    <div class="container">
      <figure class="brand">
        <a href="/" rel="noopener noreferrer">
          <img
            src="../assets/black_logo.svg"
            alt="Jogo Global Logo"
            srcset="../assets/black_logo.svg"
          />
        </a>
      </figure>
      <nav class="menu">
        <input type="checkbox" id="menuToggle" v-model="menuOpen" />
        <label for="menuToggle" class="menu-icon">
          <i v-if="!this.menuOpen" class="fa fa-bars"></i>
          <i v-else class="fa fa-times"></i>
        </label>
        <ul :class="{ menuOpen: this.menuOpen }">
          <a
            v-for="item in items"
            :key="'item' + item.tab"
            :href="'#' + item.tab"
            >{{ item.tab }}</a
          >
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "LoggedHeader",
  data() {
    return {
      items: require("@/data/catalog.json"),
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
.menuOpen {
  height: 650px;
  display: block !important;
  transition: ease-in;
}

a {
  text-decoration: none;
}
li {
  list-style: none;
}
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  text-align: center;
  font-family: sans-serif;
  min-height: 50px;
  line-height: 50px;
  background: linear-gradient(0deg, #19042d, #19042d);
  color: white;
  text-align: center;
  overflow: hidden;
  align-items: center; /* Centralizar verticalmente */
  border-bottom: 4px solid transparent;
  border-image: linear-gradient(
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
  border-image-slice: 1;
}
.brand {
  width: auto;
  height: 100%;
  float: left;
}
.brand img {
  height: 50px;
  width: 150px;
}
.menu {
  width: 80%;
  height: 100%;
  min-height: 50px;
  float: right;
}
.menu ul {
  width: 100%;
  height: inherit;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: end;
}
.menu ul a {
  padding: 0 10px;
  height: inherit;
  color: #fff;
  display: inline-block;
}
.menu ul a:hover {
  color: #fff;
  border-radius: 6px;
  background-color: #7a09e3;
}
#menuToggle {
  display: none;
}
.menu-icon {
  display: none;
}
@media screen and (max-width: 768px) {
  .isOpen {
    height: 75px !important;
  }

  .menu {
    width: 100%;
    height: auto;
  }
  .menu ul {
    display: none;
    overflow: hidden;
    -webkit-transition: max-height 0.3s;
    -moz-transition: max-height 0.3s;
    -ms-transition: max-height 0.3s;
    -o-transition: max-height 0.3s;
    transition: max-height 0.3s;
  }
  .menu ul a {
    text-align: center;
    width: 100%;
    background: linear-gradient(0deg, #19042d, #19042d);
    color: #fff;
  }
  .menu-icon {
    width: 100px;
    height: inherit;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    line-height: 80px;
  }
  .menu-icon i {
    font-size: 1.7em;
  }
}
</style>
