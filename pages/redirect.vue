<script setup>
const { stateCheck } = useAuth();
const router = useRouter();
onMounted(() => {
  stateCheck();
});
</script>

<template>
  <div
    class="flex flex-col items-center justify-center h-full space-y-4 text-xl"
  >
    リダイレクト中
  </div>
</template>
