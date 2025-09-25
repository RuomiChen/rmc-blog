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
          "1", "2", "3", "4"
        ],
      }, {
        text: "python",
        prefix: "python/",
        children: [
          "1"
        ]
      }
    ],
  }, {
    text: "选择",
    icon: "pen-to-square",
    prefix: "/zh/choose/",
    children: [
      {
        text: "Uniapp集成",
        icon: "pen-to-square",
        prefix: "uniapp/",
        children: [
          "1", "2"
        ],
      }, {
        text: "Node集成",
        prefix: "node-back/",
        children: [
          "1", "2",
        ]
      }, {
        text: "Vue集成",
        prefix: "vue/",
        children: [
          "1",
        ]
      }, {
        text: "java集成",
        prefix: "java/",
        children: [
          "1",
          "2",
        ]
      }, {
        text: "Utils",
        prefix: "utils/",
        children: [
          "1",
        ]
      }
    ],
  }, {
    text: "文档",
    icon: "pen-to-square",
    prefix: "/zh/doc/",
    children: [
      "1"
    ]
  },
  {
    text: "生活",
    icon: "mdi:one-up",
    prefix: "/zh/life/",
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
  },{
    text:'资料',
    icon:'',
    prefix:'/zh/info/',
    children:[
      "1","2"
    ]
  }
]);
