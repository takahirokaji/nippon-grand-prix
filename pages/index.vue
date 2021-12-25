<script setup>
const { getArticles } = useFirestore();
const { userInfo, loginWithGoogle } = useAuth();
</script>

<template>
  <div class="text-center">
    <div class="bg-[#F7CC45]">
      <div class="flex">
        <div>
          <img
            class="h-32 w-full md:h-4/5 md:w-128 mt-6"
            src="../assets/img/nippon-grand-prix-title.png"
            alt="サービス"
          />
          <p class="font-bold text-2xl md:text-5xl mt-4 px-6">
            笑いを、みんなと
          </p>
          <p class="font-bold text-md md:text-2xl mt-4 px-6">
            〜新感覚な大喜利アプリ〜
          </p>
        </div>
        <img
          class="h-64 md:h-screen"
          src="../assets/img/sayno.png"
          alt="person"
        />
      </div>
    </div>
    <div class="bg-black h-full md:h-screen px-4 py-8 md:py-20">
      <div class="flex justify-center">
        <button
          type="button"
          class="
            bg-gradient-to-r
            from-yellow-600
            to-zinc-400
            hover:from-zinc-500
            hover:to-yellow-500
            cursor-pointer
            text-white
            font-bold
            py-4
            px-8
            rounded-full
            md:text-3xl
            md:py-6
            md:px-16
          "
          @click="loginWithGoogle"
        >
          さっそくボケてみる！
        </button>
      </div>
      <h1 class="font-bold text-white text-center px-6 my-10 md:text-3xl">
        Nipponグランプリは、大喜利を評価・投稿して余暇を楽しむサービスです。
      </h1>
      <p class="font-bold text-3xl md:text-4xl text-white mt-4 md:mt-20">
        特徴
      </p>
      <p class="my-4 text-sm text-[#F7CC45]">Feature</p>
      <div md:flex>
        <div class="rounded border p-3 shadow-lg">1</div>
        <div class="rounded border p-3 shadow-lg">2</div>
        <div class="rounded border p-3 shadow-lg">3</div>
      </div>
    </div>
    <div class="bg-[#F7CC45] h-hull md:h-screen px-4 py-8">
      <p class="font-bold text-3xl md:text-4xl">使い方</p>
      <p class="my-4 text-sm text-white">How to Use</p>
      <div class="flex md:justify-center md:pt-20">
        <div class="w-40 md:w-80">
          <img
            class="h-64 md:h-full"
            src="../assets/img/HowToUse/sp1.png"
            alt="sp1"
          />
          <p class="mt-4 text-md font-bold md:text-3xl">①簡単に評価</p>
          <p class="mt-4 text-sm md:text-xl">
            大喜利のお題、回答を見て、おもしろいと思ったものには気軽にNiPPONを送りましょう
          </p>
        </div>
        <div class="w-40 ml-4 md:ml-40 md:w-80">
          <img
            class="h-64 md:h-full"
            src="../assets/img/HowToUse/sp2.png"
            alt="sp1"
          />
          <p class="mt-4 text-md font-bold md:text-3xl">②1分以内に回答</p>
          <p class="mt-4 text-sm md:text-xl">
            大喜利のお題を見て、1分以内におもしろ回答を目指して投稿してみましょう
          </p>
        </div>
      </div>
    </div>
    <div class="bg-black h-full md:h-screen px-4 py-8">
      <p class="font-bold text-3xl md:text-4xl text-white">よくある質問</p>
      <p class="my-4 text-sm text-[#F7CC45]">Question & Answer</p>
      <div class="divide-y">
        <div class="py-8 md:py-12">
          <blockquote
            class="text-md font-semibold italic text-white md:text-2xl"
          >
            <span
              class="
                before:block
                before:absolute
                before:-inset-1 before:-skew-y-3
                before:bg-pink-500
                relative
                inline-block
              "
            >
              <span class="relative text-white">Q</span>
            </span>
            ボケてスベったらなぐさめてくれますか？
          </blockquote>
          <blockquote
            class="mt-4 text-md font-semibold italic text-white md:text-2xl"
          >
            <span
              class="
                before:block
                before:absolute
                before:-inset-1 before:-skew-y-3
                before:bg-yellow-500
                relative
                inline-block
              "
            >
              <span class="relative text-white">A</span>
            </span>
            はい！運営者がなんとかします
          </blockquote>
        </div>
        <div class="py-8 md:py-12">
          <blockquote
            class="text-md font-semibold italic text-white md:text-2xl"
          >
            <span
              class="
                before:block
                before:absolute
                before:-inset-1 before:-skew-y-3
                before:bg-pink-500
                relative
                inline-block
              "
            >
              <span class="relative text-white">Q</span>
            </span>
            大喜利初心者でも投稿できますか？
          </blockquote>
          <blockquote
            class="mt-4 text-md font-semibold italic text-white md:text-2xl"
          >
            <span
              class="
                before:block
                before:absolute
                before:-inset-1 before:-skew-y-3
                before:bg-yellow-500
                relative
                inline-block
              "
            >
              <span class="relative text-white">A</span>
            </span>
            はい！一般人が自由に好きに投稿できるサービスです
          </blockquote>
        </div>
        <div class="py-8 md:py-12">
          <blockquote
            class="text-md font-semibold italic text-white md:text-2xl"
          >
            <span
              class="
                before:block
                before:absolute
                before:-inset-1 before:-skew-y-3
                before:bg-pink-500
                relative
                inline-block
              "
            >
              <span class="relative text-white">Q</span>
            </span>
            無料で利用できますか？
          </blockquote>
          <blockquote
            class="mt-4 text-md font-semibold italic text-white md:text-2xl"
          >
            <span
              class="
                before:block
                before:absolute
                before:-inset-1 before:-skew-y-3
                before:bg-yellow-500
                relative
                inline-block
              "
            >
              <span class="relative text-white">A</span>
            </span>
            完全無料になっています
          </blockquote>
        </div>
        <div class="py-8 md:py-12">
          <blockquote
            class="text-md font-semibold italic text-white md:text-2xl"
          >
            <span
              class="
                before:block
                before:absolute
                before:-inset-1 before:-skew-y-3
                before:bg-pink-500
                relative
                inline-block
              "
            >
              <span class="relative text-white">Q</span>
            </span>
            つまらない評価が多すぎて困ってます
          </blockquote>
          <blockquote
            class="mt-4 text-md font-semibold italic text-white md:text-2xl"
          >
            <span
              class="
                before:block
                before:absolute
                before:-inset-1 before:-skew-y-3
                before:bg-yellow-500
                relative
                inline-block
              "
            >
              <span class="relative text-white">A</span>
            </span>
            ランキングを見て、おもしろい大喜利を参考にしてみてください
          </blockquote>
        </div>
        <div class="py-8 md:py-12">
          <blockquote
            class="text-md font-semibold italic text-white md:text-2xl"
          >
            <span
              class="
                before:block
                before:absolute
                before:-inset-1 before:-skew-y-3
                before:bg-pink-500
                relative
                inline-block
              "
            >
              <span class="relative text-white">Q</span>
            </span>
            Nipponってどういう意味ですか？
          </blockquote>
          <blockquote
            class="mt-4 text-md font-semibold italic text-white md:text-2xl"
          >
            <span
              class="
                before:block
                before:absolute
                before:-inset-1 before:-skew-y-3
                before:bg-yellow-500
                relative
                inline-block
              "
            >
              <span class="relative text-white">A</span>
            </span>
            大喜利の日本一を目指してほしいという想いが詰まっています
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "lp",
};
</script>
