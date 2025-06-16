<template>
  <v-app>
    <!-- App Bar -->
    <!-- <v-img
      src="/public/Images/bg.jpg"
      cover
      class="position-fixed inset-0 z-[-1] opacity-30"
    /> -->
      <Navbar />
    

    <!-- Page Content -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import Navbar from "./components/Header/Navbar.vue";
</script>
