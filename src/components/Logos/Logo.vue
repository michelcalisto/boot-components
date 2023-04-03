<script setup>
const props = defineProps({
    url: String,
});
</script>

<template>
    <img :src="url" alt="Logo">
</template>
