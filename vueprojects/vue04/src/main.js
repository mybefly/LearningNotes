import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import hello from './components/Hello'
import home from './components/home'
import apitest from './components/apitest'
import uitest from './components/uitest'
Vue.use(Router)

const router = new Router({
	routes:[
		{ path: '/', component: App },
		{ path: '/hello', component: hello },
		{ path: '/home', component: home },
		{ path: '/apitest', component: apitest },
		{ path: '/uitest', component: uitest }
	]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
