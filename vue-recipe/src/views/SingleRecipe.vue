<template>
  <v-container class="py-10">
    <v-btn icon @click="$router.back()" class="mb-6">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <v-card v-if="recipe" class="rounded-xl elevation-3 pa-6">
      <v-img
        :src="recipe.image"
        height="400"
        class="rounded-lg mb-6"
        cover
      />

      <v-card-title class="text-2xl font-bold text-green-700">
        {{ recipe.name }}
      </v-card-title>

      <v-card-text>
        <v-divider class="my-4" />

        <!-- Ingredients Sheet -->
        <v-sheet elevation="2" rounded class="pa-4 mb-6 bg-green-lighten-5">
          <h2 class="text-lg font-semibold mb-2 text-green-900">Ingredients</h2>
          <v-list density="compact">
            <v-list-item
              v-for="(ingredient, index) in recipe.ingredients"
              :key="index"
            >
              <v-list-item-content>
                <v-list-item-title>{{ ingredient }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>

        <!-- Instructions Sheet -->
        <v-sheet elevation="2" rounded class="pa-4 mb-6 bg-blue-lighten-5">
          <h2 class="text-lg font-semibold mb-2 text-blue-900">Instructions</h2>
          <ol class="list-decimal list-inside text-gray-800 leading-relaxed">
            <li v-for="(step, index) in recipe.instructions" :key="index">
              {{ step }}
            </li>
          </ol>
        </v-sheet>

        <!-- Tags -->
        <div v-if="recipe.tags && recipe.tags.length">
          <h2 class="text-lg font-semibold mb-2">Tags</h2>
          <div class="flex flex-wrap gap-2">
            <v-chip
              v-for="tag in recipe.tags"
              :key="tag"
              color="green-lighten-4"
              class="text-green-800"
              size="small"
            >
              {{ tag }}
            </v-chip>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <div v-else class="text-center text-gray-500 py-10">
      <v-progress-circular indeterminate color="green" />
      <p class="mt-4">Loading recipe...</p>
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const recipe = ref(null)

onMounted(async () => {
  try {
    const res = await fetch('https://dummyjson.com/recipes')
    const data = await res.json()
    const id = Number(route.params.id)
    recipe.value = data.recipes.find(r => r.id === id)
  } catch (err) {
    console.error('Error fetching recipe:', err)
  }
})
</script>
