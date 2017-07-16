import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
var routes = [
    { path: '/', component: require('./components/home/home.vue.html') }
];
new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: function (h) { return h(require('./components/app/app.vue.html')); }
});
//# sourceMappingURL=boot.js.map