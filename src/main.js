// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import Axios from 'axios'
import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(Ionic);
Vue.directive('emotion', {
  bind: function (el, binding) {
    el.innerHTML = toEmotion(binding.value)
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})