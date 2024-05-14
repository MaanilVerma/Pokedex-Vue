<template>
  <div
    class="scroll-down-container"
    :style="{ display: isVisible ? 'flex' : 'none' }"
  >
    <div class="chevron" />
    <div class="chevron" />
    <div class="chevron" />
    <span class="scroll-down-text">Scroll down</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
const isVisible = ref<boolean>(true);

const handleScroll = () => {
  isVisible.value = false;
  window.removeEventListener("scroll", handleScroll);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
