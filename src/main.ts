import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { registerGlobalComp } from './components/registerGlobalComp'

const app = createApp(App)

// register global components
registerGlobalComp(app)

setupRouter(app)

app.mount('#app')
