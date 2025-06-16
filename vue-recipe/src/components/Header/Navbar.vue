<template>
  <div class=" flex justify-between  items-center   ">
 
    <div>
      <img class="w-80" src="/Images/logo.png" alt="logo" />
    </div>

    <!-- Navigation Menu -->
    <div class="flex items-end gap-6 ">
      <router-link to="/">
        <v-btn variant="tonal">Home</v-btn>
      </router-link>
      <router-link to="/Recipes">
        <v-btn variant="tonal" >Recipes</v-btn>
      </router-link>

      <router-link to="/About">
        <v-btn variant="tonal">  About Us</v-btn>
      </router-link>
      <div><v-btn density="compact" icon="mdi-magnify"/></div>
         
      
    

    </div>
  
  </div>
</template>


