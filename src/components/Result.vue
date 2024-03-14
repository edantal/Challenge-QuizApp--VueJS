<script setup>
import { defineProps, computed } from 'vue'
import { RouterLink } from 'vue-router'

const { quizLength, correctAnswers, percentage } = defineProps([
  'quizLength',
  'correctAnswers',
  'percentage',
])

const getFeedback = computed(() => {
  if (percentage < 30) {
    return 'Awful performance.. Try Again :('
  } else if (percentage >= 30 && percentage < 60) {
    return 'Great Job! NOT! You can do better!'
  } else if (percentage >= 60 && percentage < 95) {
    return 'Good Job! Take a different quiz'
  } else {
    return 'Amazing! You aced it!'
  }
})
</script>

<template>
  <div class="results flex flex-col items-center justify-center gap-10">
    <div class="mt-[150px]">
      <p class="text-sm">{{ getFeedback }}</p>
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
    >
      To all Quizes
    </RouterLink>
  </div>
</template>
