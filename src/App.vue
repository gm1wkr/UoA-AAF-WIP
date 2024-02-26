<script setup>
import Home from "./pages/Home.vue";
import Form from "./pages/Form.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />

  <main>
    <!-- <transition>
      <router-view></router-view>
    </transition> -->

    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
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

.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}
.v-leave-from {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
</style>
