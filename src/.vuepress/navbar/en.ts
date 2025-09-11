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
      },{
        text:"python",
        prefix: "python/",
        children:[
          "1"
        ]
      }
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
    text: "Joyful",
    icon: "tdesign:joyful",
    prefix: "",
    children: [
      {
        text: "",
        prefix: "",
        children: [
          {
            icon: "mdi:paint-outline",
            text: 'Digital Art Museum',
            link: "https://www.useum.org/"
          }, {
            icon: "fluent-emoji-high-contrast:paintbrush",
            text: 'Light and shadow painting',
            link: "http://weavesilk.com/"
          }
        ],
      },
    ],
  },
]);
