import Vue from 'vue';
import { router } from './router-files/index';
import App from './components/App';
import store from './store/index'
require('./bootstrap');
window.$ = require('jquery')
window.JQuery = require('jquery')

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})
