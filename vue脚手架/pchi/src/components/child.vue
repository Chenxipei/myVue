<template>
	<div>
		<p>
			这是子组件接收到父的值：{{inpmsg}}
		</p>
		<p>
			<button @click="fn">子传父</button>
		</p>
	</div>
</template>
<script>
	export default{
		props:["inpmsg"],
		data(){
			return{
				cmsg:"子的值"
			}
		},
		methods:{
			fn(){
				this.$emit("cval",this.cmsg)
			}
		}
	}
</script>
<style>
	p{
		color: blue;
	}
</style>