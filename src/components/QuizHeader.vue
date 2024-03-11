<script setup>
import { defineProps } from 'vue'

const { status } = defineProps(['status'])
</script>

<template>
  <header class="flex flex-row items-center gap-x-8">
    <div
      class="status__bar relative w-[380px] h-[20px] bg-winter-light overflow-hidden rounded-full"
    >
      <div
        class="status__bar__progress h-[100%] w-[50%] bg-winter-primary transition-all duration-500 ease-in"
      ></div>
      <p
        class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[calc(50%-1px)] text-winter-secondary text-xs leading-7"
      >
        0%
      </p>
    </div>
    <h4 class="text-sm">Question {{ status }}</h4>
  </header>
</template>
