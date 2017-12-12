require('./index/style.less');

// document.querySelector('#app').innerHTML = require('./tpl.html');
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';

import stores from './store/store';
import VueLazyload from 'vue-lazyload';


Vue.use(VueLazyload);


Vue.config.productionTip = false;


//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
axios.interceptors.request.use(function (config) { //配置发送请求的信息
    stores.dispatch('showLoading');
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
    stores.dispatch('hideLoading');
    return response;
}, function (error) {
    return Promise.reject(error);
});


Vue.prototype.$http = axios;


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store: stores,
    template: '<App/>',
    render: h => h(App)
});
// document.body.innerHTML += require('./tpl.html');
