<script setup>
import Home from './pages/Home.vue';
import Form from './pages/Form.vue';
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />

  <main>

    <router-view></router-view>

  </main>

  <Footer />
</template>

<style lang="scss" scoped>
main {
  background-color: #f1f1f1;
  border-top: 1pt solid #d4dfe6;
  border-bottom: 1pt solid #d4dfe6;
  min-height: 100%;
}
</style>
