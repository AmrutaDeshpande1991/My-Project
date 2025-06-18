<template>
  <v-footer
    class="bg-orange-lighten-5 text-brown text-center py-4"
    height="auto"
  >
    <v-container>
      <v-row align="center" justify="space-between">
        <!-- Left: Copyright -->
        <v-col cols="12" md="6" class="text-sm-left mb-2 mb-md-0">
          <span>&copy; {{ new Date().getFullYear() }} Vue Recipes</span>
        </v-col>

        <!-- Right: Social / Contact Icons -->
        <v-col cols="12" md="6" class="text-sm-right">
          <v-btn
            icon
            variant="text"
            href="mailto:deshpandeamruta1991@gmail.com"
            class="mx-1"
          >
            <v-icon color="blue-darken-2">mdi-email</v-icon>
          </v-btn>
          <v-btn
            icon
            variant="text"
            href="https://github.com/deshpandeamruta1991"
            target="_blank"
            class="mx-1"
          >
            <v-icon color="black">mdi-github</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
