import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage/HomePage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/deal', component: <h1>DEAL</h1> },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
