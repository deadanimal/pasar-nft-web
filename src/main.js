require('./bootstrap')

import { createApp } from 'vue'
import App from './App.vue'
import MainLayout from "./views/layouts/MainLayout.vue"
import router from './router'
import store from './store'
import ethers from "./plugins/ethers"
import Vue3Storage from "vue3-storage";


// import './assets/tailwind.css'
import './assets/style.css'


// lazy load, kept for reference
// import { defineAsyncComponent } from "vue";

let app = createApp(App).use(store).use(router).use(ethers).use(Vue3Storage)
app.provide('ethers', app.config.globalProperties.$ethers)

// Lazy load, kept for reference
// app.component('main-layout', defineAsyncComponent(()=> import('./views/layouts/MainLayout.vue') ));

app.component('main-layout', MainLayout)

app.mount('#app');

export { app }
