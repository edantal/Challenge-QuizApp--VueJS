<script setup>
import { ref } from 'vue'
import data from './data/data.json'

const quizes = ref(data)

function getImageUrl(name, ext) {
  return new URL(`./assets/images/${name}.${ext}`, import.meta.url).href
}
</script>

<template>
  <div class="container mx-auto">
    <header class="flex items-end gap-x-5 mb-1 mt-3">
      <h1 class="text-winter-light text-3xl font-bold tracking-widest">
        Quiczy<span class="text-winter-tertiary font-normal">App</span>
      </h1>
      <input
        type="text"
        placeholder="Search..."
        class="border-none outline-none bg-[rgba(128,128,128,.1)] p-1 rounded-[5px] text-white placeholder:text-xs placeholder:text-[#999999] placeholder:italic"
      />
    </header>

    <div
      class="categories flex flex-row flex-wrap items-center justify-start gap-5 mt-8"
    >
      <div
        v-for="quiz in quizes"
        :key="quiz.id"
        class="category__card w-[310px] overflow-hidden bg-winter-primary rounded-[2%] shadow-card cursor-pointer"
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
    </div>
  </div>
</template>
