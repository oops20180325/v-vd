import Vue from 'vue'
import App from './App.vue'





// import Viewer from 'v-viewer'
// import 'viewerjs/dist/viewer.css'
// Vue.use(Viewer, {
//   defaultOptions: {
//     zIndex: 9999
//   }
// })

import vd from './lib/vd'
import './lib/vd.css'
Vue.use(vd,"otherOP");



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
