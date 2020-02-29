import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview';//引入iview框架
import 'iview/dist/styles/iview.css';    // 使用框架CSS
import store from "./store/index"
Vue.use(iView);//挂载iView到全局

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
