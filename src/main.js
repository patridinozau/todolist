import Vue from 'vue'
import App from './App.vue'
import './style.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'


Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')

library.add(fas);