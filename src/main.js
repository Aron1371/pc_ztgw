import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/base.css'
import './assets/css/common.scss'
import './assets/css/style.scss'
import './assets/css/media.scss'
// 引入echarts并挂载到全局
import * as echarts from 'echarts'
// 将echarts挂载到window对象，使其在独立script标签中可用
window.echarts = echarts


const app = createApp(App)
app.use(router)
app.mount('#app')
