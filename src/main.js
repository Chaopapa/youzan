import Vue from 'vue';
import App from './App.vue';
import router from "./router";

Vue.config.productionTip = false;

//全局事件管控中心
Vue.prototype.$center = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
