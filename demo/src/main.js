import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import plugin from './components/index.js'
import './assets/variable.css'

const app = createApp(App)
app.use(plugin)
app.mount('#app')