import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Articles",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    }, {
      text: "life",
      icon: "life-ring",
      prefix: "life/",
      children: "structure",
    },
    "intro",
  ],
});
