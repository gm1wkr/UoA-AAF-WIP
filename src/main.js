import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import Home from './pages/Home.vue';
import Form from './pages/Form.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/form', component: Form }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });


createApp(App).use(router).mount('#app')

