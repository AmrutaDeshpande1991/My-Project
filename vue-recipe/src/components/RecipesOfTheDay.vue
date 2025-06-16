<template>
  <section class="mt-10 px-6 md:px-12 lg:px-24">
    <h2 class="text-white text-xl md:text-2xl font-bold px-4 py-2 mb-4 rounded-lg bg-gradient-to-r from-pink-500 to-red-400 shadow-md slide-in"
>
      Recipe of the Day
    </h2>
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <img
        :src="recipe.image"
        :alt="recipe.name"
        class="rounded-xl shadow-lg w-full max-h-[400px] object-cover"
      />
      <div>
        <h3 class="text-2xl font-semibold mb-2">{{ recipe.name }}</h3>
        <p class="text-gray-700 mb-4">
          {{ recipe.instructions.join(" ").slice(0, 80) }}...
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tag in recipe.tags"
            :key="tag"
            class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
          >
            {{ tag }}
          </span>
        </div>
        <router-link :to="`/recipe/${recipe.id}`">
          <v-btn color="green" class="text-white">View Full Recipe</v-btn>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  recipe: Object,
});
</script>
