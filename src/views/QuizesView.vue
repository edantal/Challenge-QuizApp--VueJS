<script setup>
import { ref, watch } from 'vue'
import { RouterView } from 'vue-router'

import data from '../data/data.json'
import Header from '../components/Header.vue'
import Card from '../components/Card.vue'

const quizes = ref(data)
const search = ref('')

watch(search, () => {
  quizes.value = data.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <div>
    <header class="flex flex-col items-center gap-y-8 mt-5 mb-2">
      <Header />
      <div class="searchbar relative w-[380px] bg-winter-light rounded-full">
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
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </div>
  </div>
</template>
