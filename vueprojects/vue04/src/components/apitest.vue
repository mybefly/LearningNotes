<template>
	<div>
		<span>{{msg}}</span>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  name: 'apitest',
  data () {
    return {
      msg: 'Welcome to ApiTestPage'
    }
  }
}
</script>

<style>
</style>