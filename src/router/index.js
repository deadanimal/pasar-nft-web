/* eslint-disable */

import { createRouter, createWebHistory } from 'vue-router'
  
const AppLoginView =  ()=> import('@/views/AppLogin.vue')
const BifrostAuthView =  ()=> import('@/views/BifrostAuth.vue')
const NftShowcaseView = () => import('@/views/NftShowcase.vue') 

import collectionRoutes from './collection'
import collectionItemsRoutes from './collection-items'


import { useStorage } from "vue3-storage";
import store from  '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: NftShowcaseView
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
    path: '/login-via-web3',
    name:'auth.bifrost.callback',
    component: BifrostAuthView,
    meta:{
      layout:'blank'
    }
  },
  ...collectionRoutes,
  ...collectionItemsRoutes



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
