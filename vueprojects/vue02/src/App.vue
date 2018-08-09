<template>
  <div id="app">
  {{msg}}
  	<myheader></myheader>
  	<mycontent @addcitys="addts"></mycontent>
	<myfooter :mycitys="citys"></myfooter>
  </div>
</template>

<script>
import Vheader  from './components/Vheader'
import Vcontent from './components/Vcontent'
import Vfooter from './components/Vfooter'
export default {
  name:"app",
  data(){
    return {
      msg: '',
      citys:["北京","上海","河北","山东"]
    }
  },
  methods:{
  	addts(str){
//		alert(str);
  		this.citys.push(str)
  	}
  },
  components:{
  	myheader:Vheader,
  	mycontent:Vcontent,
  	myfooter:Vfooter
  }
}
</script>

<style>

</style>
