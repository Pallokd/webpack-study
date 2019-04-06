import Vue from 'vue';
import App from './App.vue'

import vueRouter from 'vue-router';
import login from './coms/login.vue'
import res from './coms/res.vue';
import acc from './coms/Acc.vue';
import shopcar from './subcoms/order.vue';
import order from './subcoms/shopcar.vue'
Vue.use(vueRouter)

const router = new vueRouter({
    routes: [{
        path: '/',
        redirect: 'login'
    }, {
        path: '/login',
        component: login
    }, {
        path: '/res',
        component: res
    }, {
        path: '/acc',
        component: acc,
        children: [{
            path: 'order',
            component: order
        }, {
            path: 'shopcar',
            component: shopcar
        }]
    }]
})
var vm = new Vue({
    el: '#app',
    render: (createEle) => {
        return createEle(App)
    },
    router
})