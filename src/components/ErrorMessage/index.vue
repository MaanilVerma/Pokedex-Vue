<script lang="ts">
import "./index.scss";

export default {
  name: "ErrorMessage",
};
</script>

<template>
  <div class="error-message-container">
    <div class="error-message">
      <img
        alt="Pikachu"
        class="error-image"
        src="@/assets/images/img-pikachu-sad-min.png"
        width="32"
        height="32"
      />
      <span>Oops, Pokemon Not Found!</span>
    </div>
  </div>
</template>
