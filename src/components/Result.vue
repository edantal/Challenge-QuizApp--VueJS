<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const { quizLength, correctAnswers } = defineProps([
  'quizLength',
  'correctAnswers',
])
</script>

<template>
  <div class="results flex flex-col items-center justify-center gap-5">
    <div
      class="flex flex-col md:flex-row items-center md:justify-center w-full md:w-[720px] gap-y-5 md:gap-x-3 mx-auto mt-[150px]"
    >
      <h2 class="text-2xl">You got</h2>
      <h1
        class="flex flex-row items-center gap-3 text-7xl text-winter-primary font-extrabold"
      >
        {{ correctAnswers }}
        <span class="text-lg text-winter-secondary">out of</span>
        {{ quizLength }}
      </h1>
      <h2 class="text-2xl">Questions right!</h2>
    </div>
    <p class="text-sm">The Feedback</p>

    <hr />
    <RouterLink
      to="/"
      class="btn bg-winter-secondary border-[1px] border-solid border-winter-secondary hover:text-winter-secondary hover:bg-winter-primary"
      >To all Quizes</RouterLink
    >
  </div>
</template>
