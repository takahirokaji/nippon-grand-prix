import { defineNuxtConfig } from "nuxt3";

const title = "Nipponグランプリ";
const description = `${title}は、大喜利をスワイプで評価、クイズ形式で投稿して余暇を楽しむサービスです`;
const url = "https://nippon-grand-prix.vercel.app/";
const ogImage =
  "https://firebasestorage.googleapis.com/v0/b/nippon-grand-prix.appspot.com/o/nippon-grand-prix-title.png?alt=media&token=e5409742-2f04-4ab5-ba4f-848d0315d013";

export default defineNuxtConfig({
  head: {
    title: "(サイト名)",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      { hid: "description", name: "description", content: description },
      { hid: "ogTitle", property: "og:title", content: title },
      { hid: "ogType", property: "og:type", content: "website" },
      { hid: "ogUrl", property: "og:url", content: url },
      {
        hid: "ogImage",
        property: "og:image",
        content: ogImage,
      },
      { property: "og:site_name", content: title },
      {
        hid: "ogDescription",
        property: "og:description",
        content: description,
      },
      { name: "twitter:card", content: "summary_large_image" },
      { hid: "twitterSite", name: "twitter:site", content: title },
      { hid: "twitterUrl", name: "twitter:url", content: url },
      { hid: "twitterTitle", name: "twitter:title", content: title },
      {
        hid: "twitterDescription",
        name: "twitter:description",
        content: description,
      },
      {
        hid: "twitterImage",
        name: "twitter:image:src",
        content: ogImage,
      },
    ],
  },
  css: ["@/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  // privateRuntimeConfig: {
  //   firebase: {
  //     apiKey: process.env.FIREBASE_API_KEY,
  //     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  //     projectId: process.env.FIREBASE_PROJECT_ID,
  //     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  //     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  //     appId: process.env.FIREBASE_APP_ID,
  //     measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  //   },
  // },
  ssr: false,
  target: "static",
});
