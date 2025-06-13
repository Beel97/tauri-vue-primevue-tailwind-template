import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from 'primevue/config';
import primevueConfigs from "./configs/primevueConfigs"
import './assets/style.css'
import 'primeicons/primeicons.css';
import router from './router/index';
const app = createApp(App);
import { createPinia } from 'pinia';

app.use(PrimeVue, primevueConfigs)
  .use(router)
  .use(createPinia())
  .mount("#app");

