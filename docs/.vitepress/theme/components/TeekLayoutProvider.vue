<script setup lang="ts" name="TeekLayoutProvider">
import Teek, { localeContextKey, zhCn } from "vitepress-theme-teek";
import { provide, ref } from "vue";
import ContributeChart from "./ContributeChart.vue";
import CalendarCard from "./CalendarCard.vue";
import NotFound from "./404.vue";

// 自定义头像悬浮文字
const customLocale = {
  ...zhCn,
  tk: {
    ...zhCn.tk,
    myCard: {
      ...zhCn.tk.myCard,
      avatarTitle: "今天有什么好事发生吗",
    },
  },
};
provide(localeContextKey, ref(customLocale));
</script>

<template>
  <Teek.Layout>
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
