<!--一个组件有三部分组成-->
<template>
	<!--页面的结构-->
	<div id="app">
		<h3>
			{{msg}}
		</h3>
		<vheader></vheader>
		<p></p>
		<vcontent></vcontent>
		<p></p>
		<vfooter></vfooter>
		
	</div>
</template>

<script>
import header from './components/Vheader'
import footer from './components/Vfooter'
import content from './components/Vcontent'
//页面的业务逻辑
export default {
	name:"myApp",
	data(){
		return {
			msg:"hell 组件 我是组件 myApp"
		}
	},
	components:{
		Vheader:header,
		Vfooter:footer,
		Vcontent:content
	}
}
</script>

<style>
</style>