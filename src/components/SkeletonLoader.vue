<template>
  <div class="animate-pulse">
    <!-- Image Skeleton -->
    <div
      v-if="type === 'image'"
      :class="[
        'bg-gray-300 dark:bg-gray-700 rounded',
        imageClass || 'w-full h-64'
      ]"
    ></div>
    
    <!-- Text Skeleton -->
    <div
      v-else-if="type === 'text'"
      :class="[
        'bg-gray-300 dark:bg-gray-700 rounded',
        textClass || 'h-4'
      ]"
    ></div>
    
    <!-- Card Skeleton -->
    <div
      v-else-if="type === 'card'"
      class="rounded-md overflow-hidden border shadow-md bg-white dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-4 py-2">
        <div
          :class="[
            'bg-gray-300 dark:bg-gray-700 rounded-t-md',
            cardImageClass || 'w-full h-80'
          ]"
        ></div>
      </div>
      <div class="p-4 pt-6">
        <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-4 w-3/4"></div>
        <div class="space-y-2 mb-4">
          <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
          <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
          <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/6"></div>
        </div>
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
      </div>
    </div>
    
    <!-- Custom content -->
    <div v-else :class="customClass">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'image' | 'text' | 'card' | 'custom';
  imageClass?: string;
  textClass?: string;
  cardImageClass?: string;
  customClass?: string;
}>(), {
  type: 'text',
  imageClass: '',
  textClass: '',
  cardImageClass: '',
  customClass: '',
});
</script>

<style scoped>
</style>

