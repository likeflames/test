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
  wallpaper: {
    enabled: true,
    hideBanner: true,
    hideMask: true,
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
    circleBgImg: "/blog/bg6.avif",
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
    path: "/categories",
  },
  docAnalysis: {
    enabled: true,
    createTime: "2026-05-04",
    wordCount: true,
    readingTime: true,
    statistics: {
      provider: "vercount",
      siteView: true,
      pageView: true,
      tryRequest: true,
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
  articleAnalyze: {
    dateUTC: false,
    showCategory: true,
    showTag: true,
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
  siteAnalytics: [
    {
      provider: "google",
      options: {
        id: "G-WV1ETTWBXW",
      },
    },
  ],
  vitePlugins: {
    sidebarOption: {
      initItems: true,
    },
  },
});
