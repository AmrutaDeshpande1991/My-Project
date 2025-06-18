<template>
  <v-container
    fluid
    class="py-10"
    style="background: linear-gradient(to right, #fff8e6, #fdeff3)"
  >
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card
          elevation="10"
          class="pa-6 rounded-xl hover:scale-[1.01] transition duration-300 ease-in-out"
        >
          <!-- Heading -->
          <v-card-title
            class="d-flex align-center mb-4 flex-wrap text-center font-weight-bold text-deep-orange-darken-3 mb-4"
          >
            About Vue Recipes
          </v-card-title>

          <!-- Main Description -->
          <v-card-text class="text-body-1">
            <p class="mb-4">
              <strong class="text-primary">Vue Recipes</strong> is a
              beginner-friendly web app that helps you find delicious vegetarian
              recipes based on what you already have at home. Built with modern
              technologies like <strong>Vue 3</strong> and
              <strong>Vuetify 3</strong>, it's designed for learning,
              practicing, and making daily cooking fun!
            </p>

            <!-- Divider -->
            <v-divider class="my-4" />

            <!-- Project Goals -->
            <h3 class="text-h6 font-weight-medium mb-2">
              <v-icon color="yellow-darken-2" class="me-2"
                >mdi-lightbulb-on-outline</v-icon
              >
              Project Goals
            </h3>
            <v-list density="comfortable" class="mb-4">
              <v-list-item v-for="(goal, i) in goals" :key="i">
                <v-list-item-icon>
                  <v-icon color="success">mdi-check-circle-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>{{ goal }}</v-list-item-content>
              </v-list-item>
            </v-list>

            <v-divider class="my-4" />

            <!-- Technologies -->
            <h3 class="text-h6 font-weight-medium mb-2">
              <v-icon color="indigo" class="me-2">mdi-tools</v-icon>
              Technologies Used
            </h3>
            <v-list density="comfortable" class="mb-4">
              <v-list-item v-for="(tech, i) in technologies" :key="i">
                <v-list-item-icon>
                  <v-icon color="indigo-lighten-1">{{ tech.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>{{ tech.name }}</v-list-item-content>
              </v-list-item>
            </v-list>

            <v-divider class="my-4" />

            <!-- About Me -->
            <h3 class="text-h6 font-weight-medium mb-2">
              <v-icon color="pink-darken-2" class="me-2">mdi-account</v-icon>
              About Me
            </h3>
            <p class="mb-4">
              I’m <strong>Amruta Patil</strong>, a passionate front-end
              developer with 1.5 year of experience. I'm always curious to
              learn, experiment, and improve. This project was a great journey
              to sharpen my Vue and UI skills while creating something
              meaningful for daily life.
            </p>

            <v-divider class="my-4" />

            <!-- Future Plans -->
            <h3 class="text-h6 font-weight-medium mb-2">Future Plans</h3>
            <v-list density="comfortable" class="mb-4">
              <v-list-item v-for="(plan, i) in futurePlans" :key="i">
                <v-list-item-icon>
                  <v-icon color="green">{{ plan.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>{{ plan.text }}</v-list-item-content>
              </v-list-item>
            </v-list>

            <v-divider class="my-4" />

            <!-- Contact -->
            <h3 class="text-h6 font-weight-medium mb-2">Contact</h3>
            <p class="d-flex flex-column">
              <span class="mb-2">
                <v-icon color="blue-darken-2" class="me-2">mdi-email</v-icon>
                <a
                  href="mailto:deshpandeamruta1991@gmail.com"
                  class="text-primary"
                >
                  deshpandeamruta1991@gmail.com
                </a>
              </span>
              <span>
                <v-icon color="grey-darken-2" class="me-2">mdi-github</v-icon>
                <a
                  href="https://github.com/AmrutaDeshpande1991"
                  target="_blank"
                  class="text-primary"
                >
                  github.com/AmrutaDeshpande1991
                </a>
              </span>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const goals = [
  "Help users cook smarter with available ingredients",
  "Practice and explore Vue 3 Composition API",
  "Learn integration with external APIs",
];

const technologies = [
  { icon: "mdi-vuejs", name: "Vue 3 (Composition API)" },
  { icon: "mdi-material-design", name: "Vuetify 3" },
  { icon: "mdi-language-javascript", name: "JavaScript (ES6+)" },
  { icon: "mdi-api", name: "Free Recipe API (Spoonacular, Edamam, etc.)" },
];

const futurePlans = [
  { icon: "mdi-star-outline", text: "Add favorites feature" },
  { icon: "mdi-theme-light-dark", text: "Dark mode toggle" },
  { icon: "mdi-filter-variant", text: "Filters by prep time or dietary needs" },
  { icon: "mdi-web", text: "Host the app publicly" },
];
</script>
