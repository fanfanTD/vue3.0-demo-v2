import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/posts/new',
        name: 'NewPost',
        component: () => import(/* webpackChunkName: "about" */ '../views/NewPost.vue')
    },
    {
        path: '/posts/:id',
        name: 'ShowPost',
        component: () => import('../views/ShowPost.vue')
    },
    {
        path: '/posts/:id/edit',
        name: 'EditPost',
        component: () => import('../views/EditPost.vue')
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;
//# sourceMappingURL=index.js.map