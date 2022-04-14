import { createRouter, createWebHistory } from 'vue-router'

const CollectionListView =  ()=> import('../views/collections/CollectionList.vue')
const CollectionDetailsView =  ()=> import('../views/collections/CollectionDetails.vue')
const CollectionItemView =  ()=> import('../views/collections/CollectionItem.vue')
// const AuthView =  ()=> import('../views/Auth.bk.vue')
const AppLoginView =  ()=> import('../views/AppLogin.vue')
const BifrostAuthView =  ()=> import('../views/BifrostAuth.vue')
const ERC20View =  ()=> import('../views/tests/contract/ERC20.vue')
const ERC721View =  ()=> import('../views/tests/contract/ERC721.vue')
const TestContractView =  ()=> import('../views/tests/contract/TestContract.vue')
const MinterFactory721View = () => import('../views/tests/contract/MinterFactory721.vue') 

import { useStorage } from "vue3-storage";
import store from  '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: CollectionListView
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
  // {
  //   path: '/auth',
  //   name: 'auth',
  //   component: AuthView,
  //   meta:{
  //     layout:'blank'
  //   }
  // },
  {
    path: '/login',
    name: 'login',
    component: AppLoginView,
    meta:{
      layout:'blank'
    }
  },
  {
    path: '/test/contract',
    name: 'test.contract',
    component: TestContractView,
    meta:{
      requiresAuth: true
    },
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
      },
      {
        path: 'minterFactory721',
        name: 'test.contract.minterFactory721',
        component: MinterFactory721View
      }
    ]

  },
  {
    path: '/login-via-web3',
    name:'auth.bifrost.callback',
    component: BifrostAuthView,
    meta:{
      layout:'blank'
    }
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const isSignedIn = ()=>{

  const storage = useStorage()  

  
  const address = storage.getStorageSync('address')
  const expirationDate = storage.getStorageSync('expirationDate')

  if (new Date().getTime() > +expirationDate || !address) {
    console.log('No token or invalid token');
    store.dispatch('auth/logout');
    return false;
  }
  else{
    store.dispatch('auth/setAddress', address)
    return true;
  }

}

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) { 

    if (!isSignedIn()) {      
      next({
        path: `/login`
        // query: {
        //  redirect: to.fullPath,
        // }
      });
    } else {
      next();
    }
  }
  else{

    next()
  } 

})

export default router
