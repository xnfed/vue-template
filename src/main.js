import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './route/router';

// 样式入口
import './styles/index';

[VueRouter].forEach(plugin => Vue.use(plugin));

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
    template: '<App/>',
    components: {
        App
    }
});
