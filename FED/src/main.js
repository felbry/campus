// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
import fetch from 'whatwg-fetch';
// import store from './store';

require('./assets/lib/jquery.min.js');
require('./assets/lib/semantic.min.js');
import './assets/lib/semantic.min.css';

import {all} from './router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: all
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    // store,
    router
});
