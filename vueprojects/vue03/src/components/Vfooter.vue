<template>
<header class="footer">
<h3>我是 Footer</h3>
<ul>
		<li v-for="item in mycitys">
			<span >
				<h3>我是从父组件中传过来的 <span style="color: red;">{{item}}</span></h3>
			</span>
		</li>
	</ul>
</header>
</template>

<script>
export default{
	name:"Vfooter",
	data(){
		return {
			
		}
	},
	props:{
		mycitys:Array
	}
}
</script>

<style scoped>
h3{
	color: #2C3E50;
}
</style>