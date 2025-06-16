<template>
    <section class="p-6 md:p-12">
      <h2 class="text-2xl font-bold text-green-700 mb-6 text-center">
        All Recipes
      </h2>
  
      <div v-if="recipes.length" class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <v-card
          v-for="recipe in recipes"
          :key="recipe.id"
          class="rounded-xl"
        >
          <v-img :src="recipe.image" height="180px" cover />
          <v-card-title class="text-lg font-semibold">{{ recipe.name }}</v-card-title>
          <v-card-text class="text-gray-600">
            {{ recipe.instructions.join(' ').slice(0, 100) }}...
          </v-card-text>
          <v-card-actions>
            <router-link :to="`/recipe/${recipe.id}`">
              <v-btn color="green" class="text-white">View</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </div>
  
      <div v-else class="text-center text-gray-500">Loading recipes...</div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const recipes = ref([])
  
  onMounted(async () => {
    try {
      const res = await fetch('https://dummyjson.com/recipes')
      const data = await res.json()
      recipes.value = data.recipes
    } catch (err) {
      console.error('Failed to fetch recipes:', err)
    }
  })
  </script>
  