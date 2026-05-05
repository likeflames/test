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
    imgSrc: [
      "/bg-mobile/3c8b13a5e0a7197dde890699e107f6ea04c6c394.jpg@1256w_2234h_!web-article-pic.avif",
      "/bg-mobile/93419e16e536b5ee0a34a5f37a97bf3ddc980d0e.jpg@1256w_2234h_!web-article-pic.avif",
      "/bg-mobile/992721655dc21c227c4fba2509d499aebe298357.jpg@1256w_2718h_!web-article-pic.avif",
      "/bg-mobile/b3fb1249809fe2bc5b403ab157ccfce9add3dfa1.jpg@1256w_1886h_!web-article-pic.avif",
      "/bg-mobile/dc1090e76f04cf78f4429bf3f3c7a83dd631e5dc.jpg@1256w_2722h_!web-article-pic.avif",
      "/bg-mobile/ddd97a71872b6052a2cf7c52b58fe0ec1481c82a.jpg@1256w_2720h_!web-article-pic.avif",
      "/bg/illust_18561946_20220323_145411.png",
      "/bg/illust_69618131_20220323_145327.jpg",
      "/bg/illust_81974290_20220323_145609.jpg",
      "/bg/illust_82104637_20220323_145824.jpg",
      "/bg/illust_82777160_20220323_145445.jpg",
      "/bg/illust_83066660_20220323_145857.png",
      "/bg/illust_89207012_20220323_145757.jpg",
      "/bg/illust_90540021_20220323_145729.jpg",
      "/bg/illust_90540080_20220323_145545.jpg",
    ],
    imgInterval: 5000,
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
