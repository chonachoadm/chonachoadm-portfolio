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
}
</script>

<template>
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
