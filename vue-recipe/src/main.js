import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify' // ✅ your custom vuetify setup
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(vuetify) // ✅ this is very important
app.mount('#app')
