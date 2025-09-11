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
    text: "生活",
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
  },{
    text: "乐趣",
    icon: "tdesign:joyful",
    prefix: "",
    children: [
      {
        text: "",
        prefix: "",
        children: [
          {
            icon:"mdi:paint-outline",
            text:'数字艺术馆',
            link:"https://www.useum.org/"
          },  {
            icon:"fluent-emoji-high-contrast:paintbrush",
            text:'光影绘画',
            link:"http://weavesilk.com/"
          }
        ],
      },
    ],
  },
]);
