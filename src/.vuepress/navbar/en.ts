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
        prefix: "technology/",
        children: [
          "1"
        ],
      },
    ],
  },
  {
    text: "Lifes",
    icon: "fa-hand-spock",
    prefix: "/life/",
    children: [
      {
        text: "technology",
        prefix: "",
        children: [
          "1", "2"
        ],
      },
    ],
  },
]);
