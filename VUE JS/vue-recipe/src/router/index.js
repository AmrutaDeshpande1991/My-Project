import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Recipes from '@/views/Recipes.vue'
import SingleRecipe from '@/views/SingleRecipe.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue') // lazy loaded
  },
  {
    path: '/Recipes',
    name: 'Recipes',
    component: () => import('@/views/Recipes.vue') // lazy loaded
  },
  {
    path: '/recipe/:id',
    name: 'SingleRecipe',
    component: () => import('@/views/SingleRecipe.vue'),
    props: true
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
