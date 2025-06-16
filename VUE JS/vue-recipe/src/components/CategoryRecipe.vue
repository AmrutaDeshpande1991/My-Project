<!-- <template>
    <div class="mt-10 px-6 md:px-12 lg:px-24">
        <h2 class="text-2xl md:text-3xl font-bold mb-6 text-center text-green-700">Breakfast</h2>
    </div>
    <v-container>

    </v-container>
    
</template>
<script setup>
const props=defineProps({
  recipes: Array,
});
</script> -->
<template>
    <section class="my-12 px-6 md:px-12 lg:px-24">
      <div v-for="meal in mealTypes" :key="meal.type" class="mb-10">
        <h2 class="text-white text-xl md:text-2xl font-bold px-4 py-2 mb-4 rounded-lg 
        bg-gradient-to-r from-pink-500 to-red-400 shadow-md pulse-animation"
>
          {{ meal.icon }} {{ meal.label }}
        </h2>
  
        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <v-card
            v-for="recipe in getRecipesByMealType(meal.type)"
            :key="recipe.id"
            class="rounded-xl"
          >
            <v-img :src="recipe.image" height="180px" cover />
            <v-card-title class="text-lg font-bold">{{ recipe.name }}</v-card-title>
            <v-card-text class="text-gray-600">
              {{ recipe.instructions.join(' ').slice(0, 80) }}...
            </v-card-text>
            <v-card-actions>
              <router-link :to="`/recipe/${recipe.id}`">
                <v-btn color="green" class="text-white">View
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </div>
        <div class="mt-4 text-right">
        <router-link to="/Recipes">
          <v-btn variant="text" color="green" class="text-green-700 font-medium hover:underline">
            View More →
          </v-btn>
        </router-link>
      </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const props = defineProps({
    recipes: {
      type: Array,
      required: true
    }
  })
  
  // Define the meal types and their icons
  const mealTypes = [
    { type: 'breakfast', label: 'Breakfast', icon: '🍳' },
    { type: 'lunch', label: 'Lunch', icon: '🍽️' },
    { type: 'dinner', label: 'Dinner', icon: '🌙' }
  ]
  
  // Filter recipes by mealType
  function getRecipesByMealType(type) {
  return props.recipes.filter(recipe => {
    const mealType = recipe.mealType
    if (Array.isArray(mealType)) {
      return mealType.map(m => m.toLowerCase()).includes(type)
    }
    if (typeof mealType === 'string') {
      return mealType.toLowerCase() === type
    }
    return false
  }).slice(0, 3)
}
  </script>
  