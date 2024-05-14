<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

import ErrorMessage from "@/components/ErrorMessage/index.vue";
import Footer from "@/components/Footer/index.vue";
import Header from "@/components/Header/index.vue";
import HeroSection from "@/components/HeroSection/index.vue";
</script>

<template>
  <Header />

  <HeroSection />
  <Footer />
</template>
