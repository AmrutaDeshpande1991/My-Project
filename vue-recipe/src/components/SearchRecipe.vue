<template>
  <div>
    <v-btn icon variant="text" color="white" @click="dialog = true">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <!-- Dialog -->
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <span class="text-h6">Search Recipes</span>
          <v-btn icon @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>

        <v-card-text>
          <v-text-field
            v-model="query"
            placeholder="Enter keywords..."
            prepend-inner-icon="mdi-magnify"
            clearable
            @input="filterRecipes"
          />

          <v-list v-if="filtered.length">
            <v-list-item
              v-for="recipe in filtered"
              :key="recipe.id"
              class="mb-2"
            >
              <v-list-item-avatar size="40">
                <v-img :src="recipe.image" height="40" width="40" cover />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ recipe.name }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <router-link :to="`/recipe/${recipe.id}`">
                  <v-btn
                    size="small"
                    color="orange"
                    variant="outlined"
                    @click="dialog = false"
                  >
                    Know More
                  </v-btn>
                </router-link>
              </v-list-item-action>
            </v-list-item>
          </v-list>

          <div v-else class="text-center text-grey">No matching recipes.</div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRecipes } from "@/composables/useRecipes";

const dialog = ref(false);
const query = ref("");
const filtered = ref([]);

const { recipes } = useRecipes();

function filterRecipes() {
  const keyword = query.value.toLowerCase();
  filtered.value = recipes.value.filter((r) =>
    r.name.toLowerCase().includes(keyword)
  );
}
</script>
