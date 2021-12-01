import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "swiper/dist/css/swiper.css";
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
