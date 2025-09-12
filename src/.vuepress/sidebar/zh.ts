import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    }, {
      text: "选择",
      icon: "book",
      prefix: "choose/",
      children: "structure",
    }, {
      text: "博客与文档",
      icon: "book",
      prefix: "doc/",
      children: "structure",
    }, {
      text: "生活",
      icon: "life-ring",
      prefix: "life/",
      children: "structure",
    },
    "intro",
  ],
});
