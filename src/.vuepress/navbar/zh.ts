import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  // "/zh/demo/",
  {
    text: "博客",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      {
        text: "技术",
        icon: "pen-to-square",
        prefix: "技术/",
        children: [
         "1" 
        ],
      },
    ],
  },
  
]);
