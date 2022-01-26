<template>
  <div id="app">
    <Tinder
      ref="tinder"
      key-name="id"
      v-model:queue="queue"
      :max="3"
      :offset-y="10"
      allow-down
      @submit="onSubmit"
    >
      <template #default="{ data }">
        <div class="question h-1/2 flex flex-col items-center justify-center">
          <div
            class="flex flex-col justify-center items-center font-bold text-2xl"
          >
            {{ allQuestion.get(allQandA[data.id].question) }}
          </div>
        </div>
        <div class="h-1/2 flex flex-col">
          <div
            class="
              flex-grow flex flex-col
              justify-center
              items-center
              font-bold
              text-2xl
            "
          >
            {{ allQandA[data.id].answer }}
          </div>
          <!-- <div class="h-16 flex flex-row ml-4">
            <img
              class="h-12 rounded-full"
              src="data:image/jpeg;base64,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"
            />
            <div class="flex flex-col ml-2">
              <p class="text-lg font-bold">
                {{ allQandA[data.id].poster }}の投稿
              </p>
              <p class="text-xs text-gray-500">
                createdAt{{ allQandA[data.id].createdAt }}
              </p>
            </div>
          </div> -->
        </div>
      </template>
      <template #like>
        <img class="like-pointer" src="/images/like-txt.png" />
      </template>
      <template #nope>
        <img class="nope-pointer" slot="nope" src="/images/nope-txt.png" />
      </template>
      <template #super>
        <img class="super-pointer" slot="super" src="/images/super-txt.png" />
      </template>
      <template #down>
        <img class="down-pointer" slot="down" src="/images/down-txt.png" />
      </template>
      <template #rewind>
        <img
          class="rewind-pointer"
          slot="rewind"
          src="/images/rewind-txt.png"
        />
      </template>
    </Tinder>
    <div class="btns">
      <!-- <img src="/images/rewind.png" @click="decide('rewind')" /> -->
      <img src="/images/nope.png" @click="decide('nope')" />
      <img src="/images/super-like.png" @click="decide('super')" />
      <img src="/images/like.png" @click="decide('like')" />
      <!-- <img src="/images/help.png" @click="decide('help')" /> -->
    </div>
  </div>
</template>

<!-- <script setup>
import Tinder from "vue-tinder/src/components/vue-tinder/Tinder.vue";
import "vue-tinder/lib/style.css";
const tinder = ref(null);
return {
  tinder,
};
</script> -->

<script>
import Tinder from "vue-tinder/src/components/vue-tinder/Tinder.vue";
import "vue-tinder/lib/style.css";
import {
  getQuestionAndAnswer,
  getAllQuestion,
  getUserNameAndIcon,
  incrementLikes,
} from "~~/composables/useFirestore";
// let queue = [];
// let offset = 0;
// let history = [];
// const mock = (count = 5, append = true) => {
//   const list = [];
//   for (let i = 0; i < count; i++) {
//     list.push({ id: source[offset] });
//     offset++;
//   }
//   if (append) {
//     queue = queue.concat(list);
//   } else {
//     queue.unshift(...list);
//   }
// };

// const onSubmit = ({ item }) => {
//   if (queue.length < 3) {
//     mock();
//   }
//   history.push(item);
// };

// const decide = (choice) => {
//   if (choice === "rewind") {
//     if (history.length) {
//       tinder.value.rewind(history.splice(-Math.ceil(Math.random() * 3)));
//     }
//   } else if (choice === "help") {
//   } else if (choice === "like") {
//     tinder.decide(choice);
//   } else if (choice === "super") {
//     tinder.value.decide("super");
//   } else if (choice === "nope") {
//     tinder.value.decide("nope");
//   }
// };

// import Tinder from "vue-tinder/src/components/vue-tinder/Tinder.vue";
// import "vue-tinder/lib/style.css";

export default {
  components: {
    Tinder,
  },
  data: () => ({
    currentId: 0,
    queue: [],
    offset: 0,
    history: [],
    allQandA: [],
    allQuestion: new Map(),
    target: -1,
  }),
  created() {
    const test = async () => {
      const allQandA = getQuestionAndAnswer();
      const allQuestion = getAllQuestion();
      await allQuestion.then((snaps) => {
        snaps.forEach((snap) => {
          this.allQuestion.set(snap.id, snap.title);
        });
      });
      await allQandA.then((snaps) => {
        snaps.forEach((snap) => {
          this.allQandA.push(snap);
        });
      });
    };
    test().then(() => {
      this.mock();
    });
  },
  methods: {
    mock(count = 5, append = true) {
      const list = [];
      for (let i = 0; i < count; i++) {
        if (this.offset > this.allQandA.length) return;
        list.push({ id: this.offset, item: this.allQandA[this.offset] });
        this.offset++;
      }
      if (append) {
        this.queue = this.queue.concat(list);
        console.log(append);
      } else {
        this.queue.unshift(...list);
      }
    },
    onSubmit({ item }) {
      if (this.queue.length < 3) {
        this.mock();
      }
      this.history.push(item);
      this.currentId++;
    },
    async decide(choice) {
      const id = this.currentId;
      if (choice === "rewind") {
        if (this.history.length) {
          this.$refs.tinder.rewind(this.history.splice(-1));
        }
      } else if (choice === "help") {
      } else if (choice === "like") {
        this.$refs.tinder.decide("like");
        incrementLikes(this.allQandA[id].id, 1);
      } else if (choice === "super") {
        this.$refs.tinder.decide("super");
        incrementLikes(this.allQandA[id].id, 2);
      } else if (choice === "nope") {
        this.$refs.tinder.decide("nope");
      }
    },
    test(a) {
      console.log(a);
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
body {
  margin: 0;
  background-color: #20262e;
  overflow: hidden;
}
#app .vue-tinder {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 23px;
  margin: auto;
  width: calc(100% - 20px);
  height: calc(100% - 23px - 65px - 47px - 16px);
  min-width: 300px;
  max-width: 355px;
  max-height: 700px;
}
.nope-pointer,
.like-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  width: 64px;
  height: 64px;
}
.nope-pointer {
  right: 10px;
}
.like-pointer {
  left: 10px;
  width: 120px;
  height: auto;
}
.super-pointer {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 200px;
  margin: auto;
  width: 400px;
  height: auto;
}
.down-pointer {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  margin: auto;
  width: 112px;
  height: auto;
}
.super-pointer {
  bottom: 40px;
}
.down-pointer {
  top: 40px;
}
.rewind-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 10px;
  width: 112px;
  height: 78px;
}
.pic {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
.btns {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
  margin: auto;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  max-width: 355px;
}
.btns img {
  margin-right: 12px;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.btns img:nth-child(2n + 1) {
  width: 53px;
}
.btns img:nth-child(2n) {
  width: 65px;
}
.btns img:nth-last-child(1) {
  margin-right: 0;
}
.question {
  background-color: #f7cc45;
}
</style>
