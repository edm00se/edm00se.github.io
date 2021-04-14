<template>
  <div id="app">
    <About />
  </div>
</template>

<script setup>
import About from './components/About.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.img-circle {
  border-radius: 50%;
}
[v-cloak] {
  display: none;
}
</style>
