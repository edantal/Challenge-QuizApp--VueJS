<script setup>
import { defineProps } from 'vue'

const { quiz } = defineProps(['quiz'])

function getImageUrl(name, ext) {
  return new URL(`../assets/images/${name}.${ext}`, import.meta.url).href
}
</script>

<template>
  <div
    class="category__card w-[310px] overflow-hidden bg-winter-primary rounded-[2%] shadow-card cursor-pointer transition-all duration-500 ease-out hover:opacity-75"
  >
    <img
      :src="getImageUrl(quiz.name.toLowerCase(), 'jpg')"
      :alt="quiz.name"
      class="w-[100%] h-[190px] m-0 object-cover object-center"
    />
    <div class="category__card__text px-3 py-2">
      <h2 class="text-lg font-bold text-winter-dark">{{ quiz.name }}</h2>
      <p class="text-xs text-winter-secondary">
        {{ quiz.questions.length }} questions
      </p>
    </div>
  </div>
</template>
