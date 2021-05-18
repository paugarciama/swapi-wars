import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import People from '../views/People.vue'
import Starships from '../views/Starships.vue'
import Planets from '../views/Planets.vue'
import PeopleDetails from '../views/details/PeopleDetails.vue'
import StarshipDetails from '../views/details/StarshipDetails.vue'
import PlanetDetails from '../views/details/PlanetDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/people',
    name: 'People',
    component: People
  },
  {
    path: '/people/:id',
    name: 'PeopleDetails',
    component: PeopleDetails,
    props: true
  },
  {
    path: '/starships',
    name: 'Starships',
    component: Starships
  },
  {
    path: '/starships/:id',
    name: 'StarshipDetails',
    component: StarshipDetails,
    props: true
  },
  {
    path: '/planets',
    name: 'Planets',
    component: Planets
  },
  {
    path: '/planets/:id',
    name: 'PlanetDetails',
    component: PlanetDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
