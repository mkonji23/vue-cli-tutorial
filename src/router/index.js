import Vue from 'vue';
import VueRouter from 'vue-router';
import mainVue from '../views/MainVue.vue';
import axiosExample from '../views/example/axiosExample.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'mainVue',
        component: mainVue,
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/axiosExample',
        name: 'axiosExample',
        component: axiosExample,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;