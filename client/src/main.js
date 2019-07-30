import Vue from 'vue';
import App from './App.vue';

import CategoryList from '@/components/CategoryList';

import router from './router';
import store from './store';
import 'bootswatch/dist/cosmo/bootstrap.css';

Vue.config.productionTip = false;
Vue.component('category-list', CategoryList);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

