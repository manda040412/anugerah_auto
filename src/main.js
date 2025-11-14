import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import './style.css';

// Jalur impor yang benar: relatif dari src/
import Home from './pages/home.vue';

// 1. Definisikan Rute
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
];

// 2. Buat instance Router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 3. Pasang Router ke Aplikasi
const app = createApp(App);
app.use(router);
app.mount('#app');