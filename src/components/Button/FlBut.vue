<template>
  <button
    type="button"
    class="
      p-3
      rounded-sm
      bg-green-600
      text-green-50
      hover:bg-green-500
      hover:shadow-md
      howver:shadow-gray-400
      active:shadow-sm
      active:bg-green-800
      dark:text-green-800
      dark:bg-green-200
      dark:hover:bg-green-100
      dark:hover:shadow-gray-900
      dark:active:bg-green-300
      transition-colors
      transition-shadows
      duration-500
      ease-linear
      "
    :class="{ 'w-full': props.expanded }"
  ><slot />
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  expanded: {
    type: Boolean,
    default: false,
  },
})
</script>
