<script setup lang="ts">
import Teek from "vitepress-theme-teek";
import CalendarCard from "./CalendarCard.vue";
import ContributeChart from "./ContributeChart.vue";
import Twikoo from "./Twikoo.vue";
import NotFound from "./404.vue";
</script>

<template>
  <Teek.Layout>
    <template #teek-home-card-my-after>
      <CalendarCard />
    </template>
    <template #teek-archives-top-before>
      <ContributeChart />
    </template>
    <template #doc-after>
      <Twikoo />
    </template>
    <template #not-found>
      <NotFound />
    </template>
  </Teek.Layout>
</template>
