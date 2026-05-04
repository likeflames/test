import { defineTeekConfig } from "vitepress-theme-teek/config";
import { version } from "vitepress-theme-teek/es/version";

export const teekConfig = defineTeekConfig({
  teekHome: true, // 开启博客首页
  vpHome: false, // 隐藏 VP 首页
  sidebarTrigger: true, // 是否开启侧边栏折叠功能
  themeEnhance: {
    enabled: true,
    layoutSwitch: {
      defaultMode: "original",
    },
  },
  banner: {
    enabled: true,
    name: "likeflames",
    bgStyle: "fullImg",
    imgSrc: ["/bg/bg1.jpg", "/bg/bg2.png"],
    description: ["欢迎来到我的个人网站"],
    descStyle: "types",
    features: [],
  },
  post: {
    postStyle: "list",
    coverImgMode: "default",
  },
  author: { name: "likeflames", link: "https://github.com/likeflames" },
  blogger: {
    name: "likeflames",
    slogan: "个人网站",
    avatar: "/avatar.jpg",
    shape: "circle-rotate",
    circleSize: 100,
  },
  topArticle: {
    enabled: true,
    limit: 5,
  },
  category: {
    enabled: true,
  },
  tag: {
    enabled: true,
  },
  docAnalysis: {
    enabled: true,
    createTime: "2026-05-04",
    statistics: {
      provider: "busuanzi",
    },
  },
  homeCardSort: ["blogger", "topArticle", "category", "tag", "docAnalysis"],
  footerInfo: {
    theme: {
      name: `Theme By Teek@${version}`,
    },
    copyright: {
      createYear: 2026,
      suffix: "likeflames",
    },
  },
  codeBlock: {
    copiedDone: (TkMessage) => TkMessage.success("复制成功！"),
  },
  articleShare: { enabled: true },
  comment: {
    provider: "giscus",
    options: {
      repo: "likeflames/test",
      repoId: "R_kgDOQ_uyPg",
      category: "Announcements",
      categoryId: "DIC_kwDOQ_uyPs4C8UVX",
    },
  },
  vitePlugins: {
    sidebarOption: {
      initItems: true,
    },
  },
});
