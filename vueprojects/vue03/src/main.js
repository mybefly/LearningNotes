import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import home from './components/vuerouterfiles/home'
import apitest from './components/vuerouterfiles/apitest'
import uitest from './components/vuerouterfiles/uitest'

Vue.use(VueRouter)
router = new VueRouter({
	[
		{path:'/',component:home}
	]
})
new Vue({
  el: '#app',
  render: h => h(App)
})
