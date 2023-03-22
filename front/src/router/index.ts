import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import {useAuthStore} from "@/stores/auth";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
      beforeEnter: (to, from) => {
        const authStore = useAuthStore()

        if (to.meta.requiresAuth && !authStore.$state.connected) {
          return {
            path: '/login'
          }
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
