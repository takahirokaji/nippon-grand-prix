<script setup>
import { ref } from "vue";
const counter = ref(0);

const increment = () => {
  counter.value++;
};

const decrement = () => {
  counter.value--;
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center h-full space-y-4 text-xl"
  >
    <p>Here's a counter:</p>
    <div class="flex items-center justify-center">
      <button
        @click="increment"
        class="
          px-4
          py-2
          font-bold
          text-white
          bg-green-500
          rounded
          hover:bg-green-700
        "
      >
        +
      </button>
      <span class="mx-2">{{ counter }}</span>
      <button
        @click="decrement"
        class="
          px-4
          py-2
          font-bold
          text-white
          bg-green-500
          rounded
          hover:bg-green-700
        "
      >
        -
      </button>
    </div>
  </div>
</template>
