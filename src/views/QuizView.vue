<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import Header from '../components/Header.vue'
import QuizHeader from '../components/QuizHeader.vue'
import Question from '../components/Question.vue'
import data from '../data/data.json'

const route = useRoute()
const quizId = parseInt(route.params.id)

const quiz = data.find((q) => q.id === quizId)

const currentQuestionIndex = ref(0)
const status = `${currentQuestionIndex.value}/${quiz.questions.length}`
</script>

<template>
  <div>
    <div class="flex flex-col items-center gap-y-8 mt-5 mb-2">
      <Header />
      <QuizHeader :status="status" />
    </div>

    <Question :question="quiz.questions[currentQuestionIndex]" />
  </div>
</template>
