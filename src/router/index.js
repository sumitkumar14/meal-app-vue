import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Menu from '@/views/Menu.vue';
import Signin from '@/views/Signin.vue';
import Join from '@/views/Join.vue';
Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/menu',
            name: 'menu',
            component: Menu
        },
        {
            path: '/sign-in',
            name: 'signin',
            component: Signin
        },
        {
            path: '/join',
            name: 'join',
            component: Join
        }
    ]
});
