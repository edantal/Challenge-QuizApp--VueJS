<script setup>
import { defineProps } from 'vue'

const { status, percentage } = defineProps(['status', 'percentage'])
</script>

<template>
  <header class="flex flex-col md:flex-row items-center gap-y-3 md:gap-x-8">
    <div
      class="status__bar relative min-w-[320px] md:min-w-[380px] h-[20px] bg-winter-light overflow-hidden rounded-full"
    >
      <div
        class="status__bar__progress h-[100%] bg-winter-primary transition-all duration-500 ease-[cubic-bezier(.26,.14,.2,1)]"
        :style="{ width: percentage }"
      ></div>
      <p
        class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[calc(50%-1px)] text-winter-secondary text-xs leading-7"
      >
        {{ percentage }}%
      </p>
    </div>
    <h4 class="text-sm">Question {{ status }}</h4>
  </header>
</template>
