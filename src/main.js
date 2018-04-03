// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import routes from './router'
import 'Utils/adaptive';
import './styles/index';

[VueRouter].forEach(plugin => Vue.use(plugin));

Vue.config.productionTip = false
const router = new VueRouter({
  // mode: 'history',
  routes
});
router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0;
  next();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
