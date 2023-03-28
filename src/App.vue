<script setup>
import { computed } from 'vue';
import Breadcrumb from './components/Breadcrumbs/Breadcrumb.vue'

const crumbs = computed(() => { return [
    { label: "Administration", url: 'http://google.com' },
    { label: "Users" },
]});

const colors = computed(() => { return {
    current: "text-gray-600",
    slash: "text-gray-300",
    url: "text-gray-400 hover:text-gray-500",
}});
</script>

<template>
  {{ colors.slash }}
  <Breadcrumb :items="crumbs" :colors="colors" />
</template>

<!-- <script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script> -->

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
