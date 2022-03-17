import { createApp } from 'vue'
import App from './App.vue'
import MainLayout from "./views/layouts/MainLayout.vue"
import router from './router'
import store from './store'


// import './assets/tailwind.css'

// import { defineAsyncComponent } from "vue";

let app = createApp(App).use(store).use(router);

// app.component('main-layout', defineAsyncComponent(()=> import('./views/layouts/MainLayout.vue') ));

app.component('main-layout', MainLayout)

app.mount('#app');
