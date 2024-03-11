<script setup>
import { defineProps } from 'vue'

const { question } = defineProps(['question'])
</script>

<template>
  <div class="flex flex-col items-center w-[800px] gap-y-5 mx-auto mt-12">
    <div class="question__container w-[100%] px-3">
      <h2 class="question text-xl">{{ question.text }}</h2>
    </div>
    <div class="answers__container w-[100%] flex flex-col gap-y-3">
      <div
        v-for="option in question.options"
        :key="option.id"
        class="option flex rounded-full overflow-hidden cursor-pointer"
      >
        <p
          class="option__label w-8 h-8 flex items-center justify-center bg-winter-secondary text-sm"
        >
          {{ option.label }}
        </p>
        <div
          class="option__value h-8 flex items-center justify-start flex-1 px-3 bg-winter-primary text-sm text-winter-dark"
        >
          <p>{{ option.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
