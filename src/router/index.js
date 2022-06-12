import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import OverviewView from '../views/Overview/OverviewView.vue'
import OverviewDetailsView from '../views/Overview/OverviewDetailsView.vue'
import StarshipsView from '../views/Starships/StarshipsView.vue'
import StarshipsDetailsView from '../views/Starships/StarshipDetailsView.vue'
import PeopleView from '../views/People/PeopleView.vue'
import PeopleDetailsView from '../views/People/PeopleDetailsView.vue'
import SpeciesView from '../views/Species/SpeciesView.vue'
import SpeciesDetailsView from '../views/Species/SpeciesDetailsView.vue'

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
      path: '/overview/:id',
      name: 'overviewDetails',
      component: OverviewDetailsView
    },
    {
      path: '/starships',
      name: 'starships',
      component: StarshipsView
    },
    {
      path: '/starships/:id',
      name: 'starshipsDetails',
      component: StarshipsDetailsView
    },
    {
      path: '/people',
      name: 'people',
      component: PeopleView
    },
    {
      path: '/people/:id',
      name: 'peopleDetails',
      component: PeopleDetailsView
    },
    {
      path: '/species',
      name: 'species',
      component: SpeciesView
    },
    {
      path: '/species/:id',
      name: 'speciesDetails',
      component: SpeciesDetailsView
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
