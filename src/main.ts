import { createApp } from 'vue'
import { Vue } from 'vue-class-component'
import App from './App.vue'
import store from './store'
import router from './router'

const app = createApp(App); 
app.use(router); 
app.use(store);
app.mount('#app');

