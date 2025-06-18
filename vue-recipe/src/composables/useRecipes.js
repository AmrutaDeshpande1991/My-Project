import { ref } from 'vue'

const recipes = ref([])
const recipeOfTheDay = ref(null)

function getRandomRecipe(recipesList) {
  const randomIndex = Math.floor(Math.random() * recipesList.length)
  return recipesList[randomIndex]
}

async function fetchRecipes() {
  const res = await fetch('https://dummyjson.com/recipes')
  const data = await res.json()
  recipes.value = data.recipes
  recipeOfTheDay.value = getRandomRecipe(recipes.value)
}

export function useRecipes() {
  return { recipes, recipeOfTheDay, fetchRecipes }
}
