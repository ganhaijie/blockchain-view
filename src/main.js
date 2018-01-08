// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'  // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import locale from 'element-ui/lib/locale/lang/en';
import axios from 'axios';
import ElementUI from 'element-ui';

Vue.config.productionTip = false
Vue.use(ElementUI, {locale});
Vue.use(ElementUI);
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
