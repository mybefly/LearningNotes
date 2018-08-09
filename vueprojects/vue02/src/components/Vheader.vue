<template>
<header class="header">
	<div class="nav">
		<div class="logo">
			<img :src="imgsrc" alt="" />
		</div>
		<div class="info">
			<button>登录</button><button>注册</button>
			
		</div>
	</div>
</header>
</template>

<script>
import imgsrc from '../assets/logo.png'
export default{
	name:"Vheader",
	data(){
		return {
			imgsrc:imgsrc
		}
	}
}
</script>

<style scoped>
.header{
	width:100% ;
	height: 40px;
	background: #fff;
	box-shadow: 0 2px 4px 0 #c9c9c9;
	margin-top: 20px;
}
.header .nav{
	width: 700px;
	height: 40px;
	margin: 0 auto;
	background-color:transparent ;
}
.nav .logo{
	width: 100px;
	height: 40px;
	float: left;
}
.logo img{
	width: 40px;
	height: 40px;
}
.nav .info{
	float: right;
	width: 200px;
	height: 40px;	
}
.info button{
	widows: 80px;
	height: 40px;
}
</style>