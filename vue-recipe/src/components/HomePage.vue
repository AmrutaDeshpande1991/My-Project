<template>
  <div v-if="recipes.length">
<v-card>
  <v-carousel   height="500" hide-delimiters :continuous="true" show-arrows>
    <v-carousel-item
      v-for="recipe in recipes"
      :key="recipe.id"       
        
    >
    
      <v-img
        :src="recipe.image"
        class="w-full h-full"
        cover
      >
        <template #default>
          <div class="absolute bottom-4 right-4 z-10 text-right ">
            <h2 class="text-white text-xl font-bold">{{ recipe.name }}</h2>
            <router-link :to="`/recipe/${recipe.id}`">
              <v-btn color="yellow" class="mt-2" @click="OpenRecipe">Know More</v-btn>
              </router-link>
           
          </div>
        </template>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</v-card>
<RecipesOfTheDay v-if="recipeOfTheDay"  :recipe="recipeOfTheDay"/>
<CategoryRecipe v-if="recipes.length" :recipes="recipes"/>

</div>
</template>

  
  <script setup>
  import { ref, onMounted } from 'vue'
  import RecipesOfTheDay from './RecipesOfTheDay.vue'
  import CategoryRecipe from './CategoryRecipe.vue';

  
  const recipes = ref([])
  const recipeOfTheDay = ref(null)

function getRandomRecipe(recipesList) {
  const randomIndex = Math.floor(Math.random() * recipesList.length)
  return recipesList[randomIndex]
}

  
  onMounted(async () => {
    try {
      const res = await fetch('https://dummyjson.com/recipes')
      const data = await res.json()
      recipes.value = data.recipes
      recipeOfTheDay.value = getRandomRecipe(recipes.value)
    } catch (err) {
      console.error('Failed to fetch recipes:', err)
    }
  })
  </script>
  