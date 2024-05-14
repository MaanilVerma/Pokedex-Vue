<template>
  <div className="main-container">
    <footer class="footer">
      <div class="footer-text">
        <span class="credits">
          Developed By
          <a href="https://maanilverma.netlify.app" target="_blank">
            Maanil Verma
          </a>
        </span>
        <span>Data taken from API - pokeapi.co</span>
      </div>
      <SocialMedia></SocialMedia>
    </footer>
  </div>
</template>

<script setup lang="ts">
import SocialMedia from "../SocialMedia/index.vue";
import "./index.scss";
</script>
