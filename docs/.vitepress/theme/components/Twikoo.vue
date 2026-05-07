<template>
  <div id="twikoo"></div>
</template>

<script setup lang="ts">
import { onMounted, watch, ref } from "vue";
import { useRoute } from "vitepress";
import twikoo from "twikoo";

const route = useRoute();
const loaded = ref(false);

const initTwikoo = () => {
  try {
    twikoo.init({
      envId: "https://twikoo.likeflames.online",
      el: "#twikoo",
    });
    loaded.value = true;
  } catch (e) {
    console.error("Twikoo init failed:", e);
  }
};

watch(route, () => {
  if (loaded.value) initTwikoo();
});

onMounted(() => {
  initTwikoo();
});
</script>
