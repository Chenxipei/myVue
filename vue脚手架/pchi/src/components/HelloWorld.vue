<template>
  <div class="hello">
   <input type="text" v-model="msg" @keydown.enter="enter"/>
   <p class="red">
   		{{toupper}}
   </p>
   <p>
   	接受子:
   </p>
   <child :inpmsg="msg" @cval="pfn"></child>
  </div>
</template>

<script>
import child from "./child"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld'
    }
  },
  computed:{
  	toupper(){
  		return this.msg.toUpperCase()
  	}
  },
  methods:{
  	enter(){
  		alert(this.msg)
  	},
  	pfn(val){
  		console.log(val)
  	}
  },
  components:{
  	child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red{
	color: red;
}
</style>
