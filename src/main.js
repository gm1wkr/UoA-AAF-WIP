import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import Home from './pages/Home.vue';
import Form from './pages/Form.vue';
import axiosHelper from './helpers/axiosHelper.js';



const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/form', component: Form, name: 'Form' }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

const app = createApp(App);
app.use(router);
app.mount('#app')

