<script setup>
import {
  getQuestionAndAnswer,
  addQuestionAndAnswer,
} from "../../composables/useFirestore";
import { useUserSubs } from "../../composables/state";

const user = useUser();
const subs = useUserSubs();
const questions = await getQuestionAndAnswer();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center h-full space-y-4 text-xl"
  >
    <div>name:{{ user.name.value }}</div>
    <div>icon:{{ user.icon.value }}</div>
    <div @click="addQuestionAndAnswer(user.id.value)">
      value:{{ user.id.value }}
    </div>
    <div>posted{{ subs.posted.value }}</div>
    <div>liked{{ subs.liked.value }}</div>
    <div>superLiked{{ subs.superLiked.value }}</div>
    <div>viewed{{ subs.viewed.value }}</div>
    <div>allQ&A(length):{{ questions.length }}</div>
  </div>
</template>
