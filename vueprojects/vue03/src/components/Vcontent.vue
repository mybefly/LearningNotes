<template>
<header class="content">
	<div class="wrap"><
		<h3>我是中心内容区</h3>
		<div class="t">
			<button @click="addCity">添加一个城市</button>
		</div>
		<div class="mark">
			<textarea name="" rows="10" cols="100" class="editor" v-model="inputValue">1</textarea>
			<div class="show" v-html="markedValue"></div>
		</div>
	</div>
</header>
</div>
</template>

<script>
import Marked from 'marked'
export default{
	name:"Vcontent",
	data(){
		return {
			inputValue:"",

		}
	},
	computed:{
		markedValue(){
//			alert(this.inputValue)
			return Marked(this.inputValue)
		}
	},
	methods:{
		addCity(){
			 //触发自定义时间
			 this.$emit('addcitys',"保定")
		}
	}
}
</script>

<style scoped>

.t{
	width: 300px;
	height: 100px;
}
.mark{
	width: 1210px;
	height: 600px;
	margin: 0 auto;
/*	background-color: yellow;*/
}
.editor,.show{
	float: left;
	width: 600px;
	height: 600px;
	border: 1px solid #666;
	/*background-color: red;*/
}

</style>