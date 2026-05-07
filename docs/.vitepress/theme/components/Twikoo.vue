<template>
  <div id="twikoo"></div>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute } from "vitepress";

const route = useRoute();

const initTwikoo = async () => {
  if (typeof window !== "undefined") {
    const twikoo = await import("twikoo");
    twikoo.init({
      envId: "https://test-git-main-likeflames-projects-a8766b29.vercel.app",
      el: "#twikoo",
    });
  }
};

watch(route, () => {
  initTwikoo();
});

onMounted(() => {
  initTwikoo();
});
</script>
