<script setup>
const { getArticles } = useFirestore();
const { userInfo, loginWithGoogle } = useAuth();
const router = useRouter();

const test = () => {
  router.push("/login");
};
</script>

<template>
  <div>
    <p @click="test">GetArticles</p>
    <p @click="loginWithGoogle">loginWithGoogle</p>
  </div>
</template>
