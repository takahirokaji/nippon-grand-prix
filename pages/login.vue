<script setup>
const { loginWithGoogle, stateCheck } = useAuth();
const router = useRouter();

const redirect = () => {
  loginWithGoogle();
  router.push("/redirect");
};
</script>

<template>
  <div>
    <div
      class="login-container h-screen flex flex-col justify-center items-center"
    >
      <div class="flex-1"></div>
      <img class="max-w-xs" src="/img/only_title.png" />
      <div class="flex-1 flex flex-col justify-center items-center">
        <div class="flex-1"></div>

        <p class="text-xs max-w-xs text-gray-500 text-center">
          アカウントを作成するか、ログインするとあなたはNIPPON GRAND PRIXの
          <span class="font-bold border-b">利用規約</span>
          に同意することになります。当社における個人情報の取り扱いについては、
          <span class="font-bold border-b">プライバシーポリシー</span>
          と
          <span class="font-bold border-b">クッキーポリシー</span>をご覧ください
        </p>
        <div class="max-w-sm pt-4 px-16">
          <img src="/img/google_signin.png" @click="redirect" />
        </div>
        <div class="flex-1"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-container {
  background-color: #ffca00;
}
.login-button {
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: #ffca00;
    filter: brightness(0.2);
  }
}
</style>
