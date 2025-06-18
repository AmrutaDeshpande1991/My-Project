<template>
  <v-app>
    <!-- Adding slogan  -->
    <div class="bg-[#F8BBD0] text-white">
      <div
        class="w-full sticky top-0 z-50 bg-yellow-400 text-black py-2 shadow-md overflow-hidden"
      >
        <div class="marquee-bounce">
          🍽️ Explore Delicious Recipes – Cook with Love, Eat with Joy! 💛
        </div>
      </div>
      <!-- menu bar  -->
      <div class="max-w-[1200px] mx-auto">
        <Navbar />
      </div>
    </div>

    <v-main class="py-6 px-4">
      <div class="max-w-[1200px] mx-auto">
        <router-view />
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>
<style scoped>
.marquee-bounce {
  display: inline-block;
  white-space: nowrap;
  animation: bounce-scroll 15s ease-in-out infinite alternate;
  padding-left: 100%;
  /* gives space to move back and forth */
}

@keyframes bounce-scroll {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>

<script setup>
import Navbar from "./components/Header/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>
