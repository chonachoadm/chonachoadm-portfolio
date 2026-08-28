import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueReCaptcha } from 'vue-recaptcha-v3'


const app = createApp(App)

app.use(router)

app.mount('#app')

app.use(VueReCaptcha, {
  siteKey: '6LefemAsAAAAAAyHUGJRQZgbgLhCjP42oeRIq984'
})