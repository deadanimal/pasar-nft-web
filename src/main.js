import axios from 'axios'

window.axios = axios

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`
window.axios.defaults.headers.common['Content-Type'] = 'application/json'

import { createApp } from 'vue'
import App from './App.vue'
import MainLayout from "./views/layouts/MainLayout.vue"
import router from './router'
import store from './store'
import ethers from "./plugins/ethers"
import VueIpfs from './plugins/vue-ipfs'
import Vue3Storage from "vue3-storage";
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


// import './assets/tailwind.css'
import './assets/style.css'

// lazy load, kept for reference
// import { defineAsyncComponent } from "vue";

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

let app = createApp(App).use(store).use(router).use(ethers).use(Vue3Storage).use(VueIpfs).use(pinia)
app.provide('ethers', app.config.globalProperties.$ethers)
app.provide('ipfs', app.config.globalProperties.$ipfs)

// Lazy load, kept for reference
// app.component('main-layout', defineAsyncComponent(()=> import('./views/layouts/MainLayout.vue') ));

app.component('main-layout', MainLayout)

app.mount('#app');

export { app }
