<script setup>
const props = defineProps({
    items: Array,
    theme: Object,
});
</script>

<template>
    <nav class="nav" aria-label="Breadcrumb">
        <ol v-for="(item, index) in items">
            <li v-if="item.url"><a :href="item.url" :class="theme.url">{{ item.label }}</a></li>
            <li v-else :class="theme.current">{{ item.label }}</li>
            <li v-if="index < (items.length - 1)"><span class="slash" :class="theme.slash">/</span></li>
        </ol>
    </nav>
</template>

<style scoped>
.nav {
    display: flex;
    font-weight: 700;
}
.nav ol {
    display: flex;
}
.slash {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}
</style>