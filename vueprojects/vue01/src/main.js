import Vue from 'vue'
import App from './App.vue'
import MyApp from './myApp'


//new Vue({
//el: '#app',
//render: h => h(App)
//})


new Vue({
  el: '#app',
  render: h => h(MyApp)
})

