import './assets/main.css'
import 'glyphicons'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue';
import router from './router'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)
const pinia = createPinia()


app.use(pinia)
app.use(router)
app.use(ElementPlus)
pinia.use(piniaPluginPersistedstate)
app.mount('#app')
