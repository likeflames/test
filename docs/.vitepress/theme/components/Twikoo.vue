<template>
  <div id="twikoo"></div>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute } from "vitepress";

const route = useRoute();

const initTwikoo = () => {
  if (typeof window !== "undefined" && typeof twikoo !== "undefined") {
    twikoo.init({
      envId: "https://test-git-main-likeflames-projects-a8766b29.vercel.app",
      el: "#twikoo",
    });
  }
};

const loadTwikoo = () => {
  if (typeof twikoo !== "undefined") {
    initTwikoo();
    return;
  }
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/twikoo@1.7.9/dist/twikoo.min.js";
  script.onload = initTwikoo;
  document.head.appendChild(script);
};

watch(route, () => {
  initTwikoo();
});

onMounted(() => {
  loadTwikoo();
});
</script>
