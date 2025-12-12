import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/base.css'
import './assets/css/common.scss'
import './assets/css/style.scss'
import './assets/css/media.scss'


const app = createApp(App)
app.use(router)
app.mount('#app')
