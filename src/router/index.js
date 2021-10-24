import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import Circuits from '../views/Circuits.vue'
import Apropos from '../views/Apropos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/circuits',
    name: 'Circuits',
    component: Circuits,
  },
  {
    path: '/a-propos',
    name: "A Propos",
    component: Apropos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
