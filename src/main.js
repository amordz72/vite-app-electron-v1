import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  
import store from "./store/store"
import store_2 from "./store/store_2"
import axios from 'axios'


createApp(App).use(router).use(store).use(store_2).use(axios).mount('#app')