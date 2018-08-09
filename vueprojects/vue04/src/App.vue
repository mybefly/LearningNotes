<template>
<div id="app">
  <h1>Hello App!</h1>
	<ul>
		<li><router-link to="/hello"> ToHello</router-link></li>
		<li><router-link to="/home"> ToHome</router-link></li>
		<li><router-link to="/apitest"> ToApitest</router-link></li>
		<li><router-link to="/uitest"> ToUitest</router-link></li>
		
	</ul>
	<router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style>

</style>
