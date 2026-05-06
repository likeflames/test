<script setup lang="ts" name="TeekLayoutProvider">
import Teek from "vitepress-theme-teek";
import zhCn from "vitepress-theme-teek/es/locale/lang/zh-cn.mjs";
import ContributeChart from "./ContributeChart.vue";
import CalendarCard from "./CalendarCard.vue";
import NotFound from "./404.vue";

// 自定义 locale，覆盖默认"我好看吗"为自定义文字
const customLocale = {
  ...zhCn,
  tk: {
    ...zhCn.tk,
    myCard: {
      ...(zhCn.tk as any).myCard,
      avatarTitle: "今天有什么好事发生吗",
    },
  },
};
</script>

<template>
  <Teek.Layout :locale="customLocale">
    <template #teek-home-card-my-after>
      <CalendarCard />
    </template>

    <template #teek-archives-top-before>
      <ContributeChart />
    </template>

    <template #not-found>
      <NotFound />
    </template>
  </Teek.Layout>
</template>

<style lang="scss">
.tk-my.is-circle-bg {
  margin-bottom: 20px;

  .tk-my__avatar.circle-rotate {
    margin-top: 200px;
  }
}
</style>
