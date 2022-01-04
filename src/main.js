// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import axios from 'axios'

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
Vue.use(VueRouter);
Vue.use(ElementUI,axios);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
}).$mount('#app')