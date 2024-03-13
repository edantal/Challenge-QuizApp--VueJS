<script setup>
import { defineProps, watch } from 'vue'
import { RouterLink } from 'vue-router'

const { quizLength, correctAnswers, percentage } = defineProps([
  'quizLength',
  'correctAnswers',
  'percentage',
])
</script>

<template>
  <div class="results flex flex-col items-center justify-center gap-10">
    <div class="mt-[150px]">
      <p v-if="percentage <= 30" class="text-sm">
        Awful performance.. Try Again :(
      </p>
      <p v-else-if="percentage > 30 && percentage <= 60" class="text-sm">
        Nice, but you can do better!
      </p>
      <p v-else-if="percentage > 60 && percentage <= 90" class="text-sm">
        Good Job!
      </p>
      <p v-else class="text-sm">Amazing!</p>
    </div>

    <div
      class="flex flex-col md:flex-row items-center md:justify-center w-full md:w-[720px] gap-y-5 md:gap-x-3 mx-auto"
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

    <RouterLink
      to="/"
      class="btn bg-winter-secondary border-[1px] border-solid border-winter-secondary hover:text-winter-secondary hover:bg-winter-primary"
      >To all Quizes</RouterLink
    >
  </div>
</template>
