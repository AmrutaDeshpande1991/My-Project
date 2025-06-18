<template>
  <div v-if="recipes.length">
    <!-- Carousel Card -->
    <v-card elevation="4" class="mb-6">
      <v-carousel height="500" hide-delimiters show-arrows>
        <v-carousel-item v-for="recipe in recipes" :key="recipe.id">
          <v-img
            :src="recipe.image"
            height="500"
            cover
            class="d-flex align-end justify-end pa-6"
          >
            <!-- Overlay Content -->
            <div class="text-end">
              <h2 class="text-h5 font-weight-bold text-white">
                {{ recipe.name }}
              </h2>
              <router-link :to="`/recipe/${recipe.id}`">
                <v-btn
                  color="orange-lighten-2"
                  class="mt-2"
                  @click="OpenRecipe"
                >
                  Know More
                </v-btn>
              </router-link>
            </div>
          </v-img>
        </v-carousel-item>
      </v-carousel>
    </v-card>

    <!-- Recipes of the Day -->
    <RecipesOfTheDay v-if="recipeOfTheDay" :recipe="recipeOfTheDay" />

    <!-- Category Recipe List -->
    <CategoryRecipe v-if="recipes.length" :recipes="recipes" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import RecipesOfTheDay from "./RecipesOfTheDay.vue";
import CategoryRecipe from "./CategoryRecipe.vue";
import { useRecipes } from "@/composables/useRecipes";
const { recipes, recipeOfTheDay, fetchRecipes } = useRecipes();

onMounted(async () => {
  if (!recipes.value.length) await fetchRecipes();
});

// const recipes = ref([]);
// const recipeOfTheDay = ref(null);

// function getRandomRecipe(recipesList) {
//   const randomIndex = Math.floor(Math.random() * recipesList.length);
//   return recipesList[randomIndex];
// }

// onMounted(async () => {
//   try {
//     const res = await fetch("https://dummyjson.com/recipes");
//     const data = await res.json();
//     recipes.value = data.recipes;
//     recipeOfTheDay.value = getRandomRecipe(recipes.value);
//   } catch (err) {
//     console.error("Failed to fetch recipes:", err);
//   }
// });
</script>
