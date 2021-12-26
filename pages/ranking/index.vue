<script setup>
import {
  getQuestionAndAnswer,
} from "../../composables/useFirestore";

// const questions = await getQuestionAndAnswer();

// console.log(questions)
</script>

    <!-- <ul v-for="question in questions" :key="question.id">
      <li>
        {{ questions }}
      </li>
    </ul> -->
<template>
  <img class="w-full pb-11 bg-black" src="~/assets/img/nippon-grand-prix_title_2.png"
    alt="title" />

  <div class="w-screen flex justify-center items-center bg-black">
    <div class="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2">
      <div class="relative mb-6">
        <img class="w-full" src="~/assets/img/timeline.jpeg"
            alt="Q&A" />
      </div>
      <div class="relative mb-6">
      <img class="w-full" src="~/assets/img/timeline.jpeg"
            alt="Q&A" />
      </div>
      <div class="relative mb-6">
      <img class="w-full" src="~/assets/img/timeline.jpeg"
            alt="Q&A" />
      </div>
      <div class="relative mb-6">
          <img class="w-full" src="~/assets/img/timeline.jpeg"
            alt="Q&A" />
      </div>
      <div class="relative mb-6">
          <img class="w-full" src="~/assets/img/timeline.jpeg"
            alt="Q&A" />
      </div>
      <div class="relative mb-6">
          <img class="w-full" src="~/assets/img/timeline.jpeg"
            alt="Q&A" />
      </div>
      <div class="relative mb-6">
          <img class="w-full" src="~/assets/img/timeline.jpeg"
            alt="Q&A" />
      </div>
      <div class="relative mb-6">
          <img class="w-full" src="~/assets/img/timeline.jpeg"
            alt="Q&A" />
      </div>
    </div>
  </div>
</template>
