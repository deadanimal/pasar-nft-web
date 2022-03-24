import { createRouter, createWebHistory } from 'vue-router'

import CollectionsView from '../views/collections/Collections.vue'
import CollectionDetailsView from '../views/collections/CollectionDetails.vue'
import CollectionItemView from '../views/collections/CollectionItem.vue'
import AuthView from '../views/Auth.vue'
import ERC20View from '../views/tests/contract/ERC20.vue'
import ERC721View from '../views/tests/contract/ERC721.vue'
import TestContractView from '../views/tests/contract/TestContract.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: CollectionsView
  },
  {
    path: '/collection/:name',
    name: 'collection',
    component: CollectionDetailsView,
    props:true
  },
  {
    path: '/collection/:name/item/:title',
    name: 'collection-item',
    component: CollectionItemView,
    props:true
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    meta:{
      layout:'blank'
    }
  },
  {
    path: '/test/contract',
    name: 'test.contract',
    component: TestContractView,
    children: [
      {
        path: 'erc20',
        name: 'test.contract.erc20',
        component: ERC20View
      },
      {
        path: 'erc721',
        name: 'test.contract.erc721',
        component: ERC721View
      }
    ]

  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
