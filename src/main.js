import Vue from 'vue'
import App from './App.vue'

var VueScrollTo = require('vue-scrollto')

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1700,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
