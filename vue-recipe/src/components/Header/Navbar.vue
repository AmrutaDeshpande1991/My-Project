<template>
  <v-container fluid class="py-2">
    <v-row align="center" justify="space-between" class="flex-wrap">
      <!-- Logo -->
      <v-col cols="6" sm="3">
        <v-img src="/Images/logo.png" alt="logo" max-width="150" contain />
      </v-col>

      <!-- Icon for Mobile -->
      <v-col class="d-sm-none text-right">
        <v-btn icon @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-col>

      <!-- Desktop Menu Navbar -->
      <v-col cols="12" sm="9" class="d-none d-sm-flex">
        <v-row justify="end" class="gap-4" align="center" no-gutters>
          <router-link to="/">
            <v-btn
              variant="tonal"
              class="!bg-orange-500 hover:!bg-orange-600 text-none"
              color="white"
            >
              Home
            </v-btn>
          </router-link>

          <router-link to="/Recipes">
            <v-btn
              variant="tonal"
              class="!bg-orange-500 hover:!bg-orange-600 text-none"
              color="white"
            >
              Recipes
            </v-btn>
          </router-link>

          <router-link to="/About">
            <v-btn
              variant="tonal"
              class="!bg-orange-500 hover:!bg-orange-600 text-none"
              color="white"
            >
              About Us
            </v-btn>
          </router-link>

          <SearchRecipe />
        </v-row>
      </v-col>
    </v-row>
  </v-container>

  <!--  Navbar Mobile Drawer  -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    class="d-sm-none"
  >
    <v-list nav dense>
      <v-list-item to="/" @click="drawer = false">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item to="/Recipes" @click="drawer = false">
        <v-list-item-title>Recipes</v-list-item-title>
      </v-list-item>
      <v-list-item to="/About" @click="drawer = false">
        <v-list-item-title>About Us</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import SearchRecipe from "../SearchRecipe.vue";

const drawer = ref(false);
</script>
