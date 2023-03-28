<script setup>
const props = defineProps({
    items: Array,
});
</script>

<template>
    <nav class="flex font-bold text-gray-700" aria-label="Breadcrumb">
        <ol v-for="(item, index) in items" class="list-reset flex">
            <li v-if="item.url"><a :href="item.url" class="text-gray-400 hover:text-gray-500">{{ __(item.label) }}</a></li>
            <li v-else class="text-gray-600">{{ __(item.label) }}</li>
            <li v-if="index < (items.length - 1)"><span class="text-gray-300 mx-2">/</span></li>
        </ol>
    </nav>
</template>