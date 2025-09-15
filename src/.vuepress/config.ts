import { commentPlugin } from '@vuepress/plugin-comment';
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "RuomiChen",
      description: "A blog for exploring and sharing knowledge by Rmc",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "若迷尘",
      description: "若迷尘的博客",
    },
  },
  plugins: [
    commentPlugin({
      provider: 'Waline', // Artalk | Giscus | Waline | Twikoo
      // 服务商配置
      serverURL:'https://blog-comment-4dt0pq59a-rmc-cfs-projects.vercel.app/'
    }),
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
