import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "technology",
        icon: "pen-to-square",
        prefix: "technology/",
        children: [
         "1" 
        ],
      },
    ],
  },
]);
