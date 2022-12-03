import { createRouter, createWebHistory } from "vue-router";
// import DetailsPage from '../views/Details'
// import HomePage from '../views/Home'



const routes = [
  {
    path: '/',
    component: () => import('../views/Home'),
  },
  {
    name: 'details',
    path: '/details/:id',
    component: () => import('../views/Details'),
    props: true
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), routes
})

export default router;