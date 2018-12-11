import Vue from 'vue';
import App from './App.vue';
import {router} from './router/router.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import store from './store/storeService.js';

Vue.use(ElementUI, { locale });

new Vue({
	router,
	store,
  el: '#app',
  render: h => h(App)
})


