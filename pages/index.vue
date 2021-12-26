<script setup>
const router = useRouter();
const toLogin = () => router.push("./login");
</script>

<template>
  <div class="text-center">
    <div class="bg-[#FFCA00]">
      <div class="flex">
        <div>
          <img
            class="h-32 w-full md:h-3/5 md:w-128 mt-6"
            src="~/assets/img/nippon-grand-prix-title.png"
            alt="サービス"
          />
          <p class="font-black text-xl md:text-5xl mt-4 px-6">
            スワイプでひと笑い
          </p>
          <p class="font-bold text-base md:text-2xl mt-2 px-6 md:mt-4">
            〜新感覚な大喜利アプリ〜
          </p>
        </div>
        <img
          class="h-64 md:h-screen"
          src="~/assets/img/yamato.png"
          alt="person"
        />
      </div>
    </div>
    <div class="bg-black h-full px-4 py-8 md:py-20">
      <div class="flex justify-center">
        <button
          type="button"
          class="
            bg-gradient-to-r
            from-yellow-600
            to-zinc-400
            hover:from-zinc-500
            hover:to-teal-600
            cursor-pointer
            text-white
            font-bold
            py-3
            px-8
            rounded-full
            md:text-2xl
            md:py-4
            md:px-16
          "
          @click="toLogin"
        >
          さっそくひと笑い！
        </button>
      </div>
      <h1
        class="
          font-bold
          text-white text-justify
          md:text-center
          px-6
          pt-8
          md:text-2xl
        "
      >
        <span class="text-yellow-500">Nipponグランプリ</span>
        は、大喜利をスワイプで評価、クイズ形式で投稿して余暇を楽しむサービスです。
      </h1>
    </div>
    <div class="bg-[#FFCA00] h-hull px-4 py-8">
      <p class="font-bold text-3xl md:text-4xl">特徴</p>
      <p class="my-4 text-sm text-white">Feature</p>
      <div class="py-4 md:flex md:justify-center">
        <div
          class="
            max-w-md
            overflow-hidden
            rounded-lg
            border
            shadow-lg
            bg-white
            font-bold
            my-4
            md:mx-6
            md:w-1/4
          "
        >
          <div>
            <img
              class="w-full h-64 md:h-80"
              src="https://source.unsplash.com/yd4ubMUNTG0"
              alt="おもしろ回答ページ例"
            />
            <p class="px-6 py-4 text-xl text-justify">
              スワイプしておもしろい回答に出会おう！
            </p>
          </div>
        </div>
        <div
          class="
            max-w-md
            overflow-hidden
            rounded-lg
            border
            shadow-lg
            bg-white
            font-bold
            my-4
            md:mx-6
            md:w-1/4
          "
        >
          <div>
            <img
              class="w-full h-64 md:h-80"
              src="https://source.unsplash.com//qIu77BsFdds"
              alt="ランキングページ例"
            />
            <p class="px-6 py-4 text-xl text-justify">
              ランキングでおもしろい回答を探そう！
            </p>
          </div>
        </div>
        <div
          class="
            max-w-md
            overflow-hidden
            rounded-lg
            border
            shadow-lg
            bg-white
            font-bold
            my-4
            md:mx-6
            md:w-1/4
          "
        >
          <div>
            <img
              class="w-full h-64 md:h-80"
              src="https://source.unsplash.com/-2vD8lIhdnw"
              alt="投稿ページ例"
            />
            <p class="px-6 py-4 text-xl text-justify">
              制限時間内に投稿してみよう！
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black h-full px-4 py-8">
      <p class="font-bold text-3xl md:text-4xl text-white">使い方</p>
      <p class="my-4 text-sm text-[#FFCA00]">How to Use</p>
      <div class="flex justify-center py-8 md:pt-20">
        <div class="w-40 md:w-80 text-white text-justify">
          <img
            class="h-64 md:h-4/6 rounded-md"
            src="~/assets/img/HowToUse/sp1.png"
            alt="sp1"
          />
          <p class="mt-4 text-md font-bold md:text-3xl">①簡単に評価</p>
          <p class="mt-4 text-sm md:text-xl">
            大喜利のお題、回答を見て、おもしろいと思ったものには気軽にNiPPONを送りましょう
          </p>
        </div>
        <div class="w-40 ml-4 md:ml-40 md:w-80 text-white text-justify">
          <img
            class="h-64 md:h-4/6 rounded-md"
            src="~/assets/img/HowToUse/sp2.png"
            alt="sp1"
          />
          <p class="mt-4 text-md font-bold md:text-3xl">②1分以内に回答</p>
          <p class="mt-4 text-sm md:text-xl">
            大喜利のお題を見て、1分以内におもしろ回答を目指して投稿してみましょう
          </p>
        </div>
      </div>
    </div>
    <div class="bg-[#FFCA00] h-hull px-4 py-8">
      <p class="font-bold text-3xl md:text-4xl text-black">よくある質問</p>
      <p class="my-4 text-sm text-white">Question & Answer</p>
      <div class="divide-y">
        <div class="py-8 md:py-12">
          <blockquote
            class="text-md font-semibold italic text-black md:text-2xl"
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
            class="mt-4 text-md font-semibold italic text-black md:text-2xl"
          >
            <span
              class="
                before:block
                before:absolute
                before:-inset-1 before:-skew-y-3
                before:bg-teal-600
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
            class="text-md font-semibold italic text-black md:text-2xl"
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
            class="mt-4 text-md font-semibold italic text-black md:text-2xl"
          >
            <span
              class="
                before:block
                before:absolute
                before:-inset-1 before:-skew-y-3
                before:bg-teal-600
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
            class="text-md font-semibold italic text-black md:text-2xl"
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
            class="mt-4 text-md font-semibold italic text-black md:text-2xl"
          >
            <span
              class="
                before:block
                before:absolute
                before:-inset-1 before:-skew-y-3
                before:bg-teal-600
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
            class="text-md font-semibold italic text-black md:text-2xl"
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
            『Nippon』がもらえなくて困ってます
          </blockquote>
          <blockquote
            class="mt-4 text-md font-semibold italic text-black md:text-2xl"
          >
            <span
              class="
                before:block
                before:absolute
                before:-inset-1 before:-skew-y-3
                before:bg-teal-600
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
            class="text-md font-semibold italic text-black md:text-2xl"
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
            『Nippon』ってどういう意味ですか？
          </blockquote>
          <blockquote
            class="mt-4 text-md font-semibold italic text-black md:text-2xl"
          >
            <span
              class="
                before:block
                before:absolute
                before:-inset-1 before:-skew-y-3
                before:bg-teal-600
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
    <div class="bg-black h-full px-4 py-8">
      <div class="md:flex md:justify-center">
        <div class="px-6 md:px-12 md:py-20 md:w-1/2">
          <p class="text-white text-3xl font-black text-justify md:text-4xl">
            10秒でひとわらい
          </p>
          <p
            class="
              text-white text-base text-bold
              py-2
              text-justify
              mx-auto
              md:text-xl
            "
          >
            新感覚な大喜利アプリ『<span class="font-bold text-yellow-500"
              >Nipponグランプリ</span
            >』は、バカ、シュール、身内などのお題に対して回答されたコンテンツをテンポよくスワイプすることでおもしろい大喜利にすぐ出会える
          </p>
          <div class="flex justify-center py-8 md:justify-start">
            <button
              type="button"
              class="
                bg-gradient-to-r
                from-yellow-600
                to-zinc-400
                hover:from-zinc-500
                hover:to-teal-600
                cursor-pointer
                text-white
                font-bold
                py-3
                px-8
                rounded-full
                md:text-2xl
                md:py-4
                md:px-16
              "
              @click="toLogin"
            >
              さっそくひと笑い！
            </button>
          </div>
        </div>
        <div class="flex justify-center">
          <img
            class="h-64 md:h-96"
            src="~/assets/img/applink-logo.png"
            alt="app-logo"
          />
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
