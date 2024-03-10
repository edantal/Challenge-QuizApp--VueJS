<script setup>
import { ref, watch } from 'vue'
import data from './data/data.json'

const quizes = ref(data)
const search = ref('')

watch(search, () => {
  quizes.value = data.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  )
})

function getImageUrl(name, ext) {
  return new URL(`./assets/images/${name}.${ext}`, import.meta.url).href
}
</script>

<template>
  <div class="container mx-auto pb-10">
    <header class="flex flex-col items-center gap-y-8 mt-5 mb-2">
      <h1 class="text-winter-light text-5xl font-bold tracking-widest">
        Quiczy<span class="text-winter-tertiary font-normal">App</span>
      </h1>
      <div class="searchbar relative w-[380px] bg-winter-light rounded-[5px]">
        <input
          v-model.trim="search"
          type="text"
          placeholder="Search..."
          class="w-full border-none outline-none py-1 pl-7 pr-2 bg-transparent text-winter-secondary text-xs leading-7 placeholder:text-winter-tertiary placeholder:italic"
        />
        <i
          class="ri-search-line absolute top-[50%] left-2 translate-y-[-50%] text-winter-secondary"
        ></i>
      </div>
    </header>

    <div
      class="categories flex flex-row flex-wrap items-center justify-start gap-5 mt-8"
    >
      <div
        v-for="quiz in quizes"
        :key="quiz.id"
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
    </div>
  </div>
</template>
