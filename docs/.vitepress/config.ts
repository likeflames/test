import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";
import { teekConfig } from "./teekConfig";
import { createRewrites } from "vitepress-theme-teek/config";

const description = [
  "likeflames 的个人网站",
  "分享技术、生活与思考",
].toString();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  title: "likeflames",
  description: description,
  cleanUrls: false,
  rewrites: createRewrites({ srcDir: "docs" }),
  lastUpdated: true,
  lang: "zh-CN",
  head: [
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: "/teek-logo-mini.svg" },
    ],
    ["link", { rel: "icon", type: "image/png", href: "/teek-logo-mini.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "likeflames" }],
    ["meta", { property: "og:site_name", content: "likeflames" }],
    ["meta", { property: "og:image", content: "/avatar.jpg" }],
    ["meta", { property: "og:url", content: "https://likeflames.online" }],
    ["meta", { property: "og:description", description }],
    ["meta", { name: "description", description }],
    ["meta", { name: "author", content: "likeflames" }],
    // 禁止浏览器缩放
    // [
    //   "meta",
    //   {
    //     name: "viewport",
    //     content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
    //   },
    // ],
    ["meta", { name: "keywords", description }],
    [
      "style",
      {},
      `@media(max-width:768px){.tk-banner-bg-image.full{background:#0e98f1!important;transition:none!important}}`,
    ],
  ],
  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  sitemap: {
    hostname: "https://likeflames.online",
    transformItems: (items) => {
      const permalinkItemBak: typeof items = [];
      // 使用永久链接生成 sitemap
      const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig
        .permalinks;
      items.forEach((item) => {
        const permalink = permalinks?.map[item.url];
        if (permalink)
          permalinkItemBak.push({ url: permalink, lastmod: item.lastmod });
      });
      return [...items, ...permalinkItemBak];
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/avatar.jpg",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "归档", link: "/archives" },
      { text: "分类与标签", link: "/categories" },
      { text: "文章清单", link: "/articleOverview" },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/likeflames",
      },
    ],
    search: {
      provider: "local",
    },
    editLink: {
      text: "在 GitHub 上编辑此页",
      pattern:
        "https://github.com/likeflames/test/edit/main/docs/:path",
    },
  },
  vite: {
    build: { chunkSizeWarningLimit: 2000 },
    plugins: [
      llmstxt() as any,
      {
        name: "override-locale",
        enforce: "post",
        transform(code, id) {
          if (id.includes("zh-cn.mjs") || id.includes("zh-cn.")) {
            return code.replace('avatarTitle: "我好看吗"', 'avatarTitle: "今天有什么好事发生吗"');
          }
          return code;
        },
      },
      {
        name: "fix-combined-categories-tags",
        enforce: "post",
        transform(code, id) {
          if (id.includes("HomePostList") && id.includes("index.vue2")) {
            const from = `if (frontmatterConst.categoriesPage) {
        const c = searchParams.get("category");
        post = c ? postConst.groupPosts.categories[c] : post.filter((item) => item.frontmatter.categories);
      } else if (frontmatterConst.tagsPage) {
        const t2 = searchParams.get("tag");
        post = t2 ? postConst.groupPosts.tags[t2] : post.filter((item) => item.frontmatter.tags);
      }`;
            if (code.includes(from)) {
              return code.replace(
                from,
                `if (frontmatterConst.categoriesPage && frontmatterConst.tagsPage) {
        const c = searchParams.get("category");
        const t = searchParams.get("tag");
        if (t) post = postConst.groupPosts.tags[t];
        else if (c) post = postConst.groupPosts.categories[c];
        else post = post.filter((item) => item.frontmatter.categories);
      } else if (frontmatterConst.categoriesPage) {
        const c = searchParams.get("category");
        post = c ? postConst.groupPosts.categories[c] : post.filter((item) => item.frontmatter.categories);
      } else if (frontmatterConst.tagsPage) {
        const t = searchParams.get("tag");
        post = t ? postConst.groupPosts.tags[t] : post.filter((item) => item.frontmatter.tags);
      }`
              );
            }
          }
          return code;
        },
      },
      {
        name: "fix-article-banner-sidebar",
        enforce: "post",
        transform(code, id) {
          if (id.includes("ArticleBanner") && id.includes("index.vue2")) {
            console.log("[banner-plugin] matched:", id.slice(-50));
            const found = code.includes(`!unref(hasSidebar) && unref(articleBannerConfig).enabled`);
            console.log("[banner-plugin] found target:", found);
            if (found) {
              return code.replace(
                `!unref(hasSidebar) && unref(articleBannerConfig).enabled`,
                `(unref(articleBannerConfig).enabled)`
              );
            }
          }
          return code;
        },
      },
    ],
  },
  // transformHtml: (code, id, context) => {
  //   if (context.page !== "404.md") return code;
  //   return code.replace("404 | ", "");
  // },
});
