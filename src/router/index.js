import { createRouter, createWebHistory } from 'vue-router'

import Collections from '../views/collections/Collections.vue'
import CollectionDetails from '../views/collections/CollectionDetails.vue'
import CollectionItem from '../views/collections/CollectionItem.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Collections
  },
  {
    path: '/collection/:name',
    name: 'collection',
    component: CollectionDetails,
    props:true
  },
  {
    path: '/collection/:name/item/:title',
    name: 'collection-item',
    component: CollectionItem,
    props:true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
