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
  <Breadcrumb :items="crumbs" :colors="colors" />
</template>