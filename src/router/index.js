import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "default" */ '../../src/App.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
            },
            {
                path: '/:title',
                name: 'detail',
                component: () => import(/* webpackChunkName: "detail" */ '../components/NewsDetail.vue'),
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router