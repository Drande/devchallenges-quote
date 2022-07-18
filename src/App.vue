<script setup lang="ts">
import Quotes from "./components/Quotes.vue";
</script>

<template>

  <main>
    <Quotes></Quotes>
  </main>
  
  <footer class='footer'><span class="credits">created by <b><u>Drande</u></b> - devChallenges.io</span></footer>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
</style>
