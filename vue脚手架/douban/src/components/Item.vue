<template>
	<div class="item" @click="transmit">
		<span v-if='!flag()'>
			<slot name="noimg"></slot>
		</span>
		<span v-if='flag()'>
			<slot name="activeimg"></slot>
		</span>
		<br>
		<span :class="{active:flag()}">{{title}}</span>
	</div>
</template>

<script>
	export default {
	  name: 'item',
	  props:['title','order','index'],
	  methods:{
		  flag(){
			  if(this.order==this.index){
				  console.log(1)
				  return true
			  }
			  return false
		  },
		  transmit(){
			  console.log(2333333,this.order)
			  this.$emit('childval',this.order)
		  }
	  }
	}
</script>

<style>
	.item{
		flex: 1;
	}
	.item .active{
		color: red;
	}
</style>
