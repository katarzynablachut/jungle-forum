import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import LoginToken from './views/LoginToken.vue';

Vue.use(Router);

 export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login/token/:token',
      name: 'login-token',
      component: () => import('./views/LoginToken.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/LoginToken.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin.vue'),
      beforeEnter(to, from, next) {
        if (store.getters.isLoggedIn) {
          next();
        } else {
          next('/');
        }
      },
    },
  ],
});