<script setup>
const { getArticles } = useFirestore();
const { userInfo, loginWithGoogle } = useAuth();
</script>

<template>
  <div>
    <p @click="getArticles">GetArticles</p>
    <p @click="loginWithGoogle">loginWithGoogle</p>
  </div>
</template>
