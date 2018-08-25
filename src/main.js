import '@babel/polyfill'
import './plugins/vuetify'
import App from './components/layouts/App/'
import router from './router/'
import store from './store'
import Vue from 'vue'

//  Disable production mode message during development
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
