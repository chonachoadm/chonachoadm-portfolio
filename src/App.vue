<script>
import AppFooter from './components/AppFooter.vue';
import AppNav from './components/AppNav.vue'
import { RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
    AppNav,
    RouterView,
    AppFooter
  },
  // data() {
  //   return {
  //     openNav: false,
  //   }
  // },
}
</script>

<template>
  <!-- <button class="nav-toggle" @click="openNav = !openNav">
    ☰
  </button> -->
  <!-- <AppNav :is-nav-open="openNav" @toggleNav="openNav = !openNav" /> -->
  <header>
    <AppNav />
  </header>
  <RouterView />
  <AppFooter />
</template>

<style>
h1 {
  font-family: 'Norwester', sans-serif;
  font-size: 5rem;
}
</style>

<style scoped>
.nav-toggle {
  display: none;
}

@media (max-width: 1024px) {

  /* .openNav {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 1000;
  } */

  .nav-toggle {
    position: fixed;
    display: flex;
    justify-self: end;
    margin: 5%;
    padding: 1% 2%;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    border-radius: 5px;
    font-size: 1.5rem;
  }
}
</style>
