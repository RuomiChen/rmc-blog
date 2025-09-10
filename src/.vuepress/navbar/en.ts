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
    icon: "mdi:one-up",
    prefix: "/life/",
    children: [
      {
        text: "",
        prefix: "",
        children: [
          "1", "2"
        ],
      },
    ],
  }, {
    text: "乐趣",
    icon: "tdesign:joyful",
    prefix: "",
    children: [
      {
        text: "",
        prefix: "",
        children: [
          {
            icon: "mdi:paint-outline",
            text: '数字艺术馆',
            link: "https://www.useum.org/"
          }, {
            icon: "fluent-emoji-high-contrast:paintbrush",
            text: '光影绘画',
            link: "http://weavesilk.com/"
          }
        ],
      },
    ],
  },
]);
