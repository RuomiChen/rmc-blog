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

  theme,
 
  // Enable it with pwa
  // shouldPrefetch: false,
});
