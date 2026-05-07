<template>
  <div id="twikoo"></div>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute } from "vitepress";

const route = useRoute();

const initTwikoo = async () => {
  if (typeof window === "undefined") return;
  try {
    const twikoo = await import("twikoo");
    twikoo.init({
      envId: "https://twikoo.likeflames.online",
      el: "#twikoo",
    });
  } catch (e) {
    console.error("Twikoo init failed:", e);
  }
};

watch(route, () => {
  setTimeout(initTwikoo, 500);
});

onMounted(() => {
  initTwikoo();
});
</script>
