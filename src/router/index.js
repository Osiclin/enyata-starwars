import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import OverviewView from '../views/OverviewView.vue'
import StarshipsView from '../views/StarshipsView.vue'
import PeopleView from '../views/PeopleView.vue'
import SpeciesView from '../views/SpeciesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/overview',
      name: 'overview',
      component: OverviewView
    },
    {
      path: '/starships',
      name: 'starships',
      component: StarshipsView
    },
    {
      path: '/people',
      name: 'people',
      component: PeopleView
    },
    {
      path: '/species',
      name: 'species',
      component: SpeciesView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
