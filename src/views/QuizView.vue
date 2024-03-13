<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import Header from '../components/Header.vue'
import QuizHeader from '../components/QuizHeader.vue'
import Question from '../components/Question.vue'
import Result from '../components/Result.vue'
import data from '../data/data.json'

const route = useRoute()
const quizId = parseInt(route.params.id)
const quiz = data.find((q) => q.id === quizId)

const currentQuestionIndex = ref(0)
const numberCorrectAnswers = ref(0)
const showResults = ref(false)

const status = computed(
  () => `${currentQuestionIndex.value}/${quiz.questions.length}`
)
const percentage = computed(() =>
  Math.round((currentQuestionIndex.value / quiz.questions.length) * 100)
)
const percentageOfSuccess = computed(() =>
  Math.round((numberCorrectAnswers.value / quiz.questions.length) * 100)
)

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberCorrectAnswers.value++
  }
  if (quiz.questions.length - 1 === currentQuestionIndex.value) {
    showResults.value = true
  }
  currentQuestionIndex.value++
}
</script>

<template>
  <div>
    <div class="flex flex-col items-center gap-y-8 mt-5 mb-2">
      <Header />
      <QuizHeader :status="status" :percentage="percentage" />
    </div>

    <Question
      v-if="!showResults"
      :question="quiz.questions[currentQuestionIndex]"
      @selectOption="onOptionSelected"
    />
    <Result
      v-else
      :quizLength="quiz.questions.length"
      :correctAnswers="numberCorrectAnswers"
      :percentage="percentageOfSuccess"
    />
  </div>
</template>
