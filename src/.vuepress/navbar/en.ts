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
  },
   {
    text: "Chooose",
    icon: "mdi:one-up",
    prefix: "/choose/",
    children: [
      {
        text: "Uniapp Integration",
        icon: "pen-to-square",
        prefix: "uniapp/",
        children: [
          "1", "2"
        ],
      }, {
        text: "Node Integration",
        prefix: "node-back/",
        children: [
          "1", "2",
        ]
      }, {
        text: "Vue Integration",
        prefix: "vue/",
        children: [
          "1",
        ]
      }, {
        text: "Java Integration",
        prefix: "java/",
        children: [
          "1",
        ]
      }, {
        text: "utils",
        prefix: "utils/",
        children: [
          "1",
        ]
      }
    ],
  }, {
  text: "Doc",
    icon: "mdi:one-up",
      prefix: "doc/",
        children: [
          {
            text: "",
            prefix: "",
            children: [
              "1"
            ],
          },
        ],
  }, {
    text: "Lifes",
    icon: "mdi:one-up",
    prefix: "/life/",
    children: [
      {
        text: "",
        prefix: "",
        children: [
          "1"
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
  },,
  "my"
]);
