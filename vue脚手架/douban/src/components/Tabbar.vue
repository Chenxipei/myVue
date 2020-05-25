<template>
	<div class="tabbar">
		<Item title="首页" order=1 :index="orderIndex" @childval="getCVal">
			<img slot="noimg" src="../assets/1.png" alt="" >
			<img slot="activeimg" src="../assets/6.png" alt="">
		</Item>
		<Item title="搜索" order=2 :index="orderIndex" @childval="getCVal">
			<img slot="noimg" src="../assets/2.png" alt="">
			<img slot="activeimg" src="../assets/7.png" alt="">
		</Item>
		<Item title="热点" order=3 :index="orderIndex" @childval="getCVal">
			<img slot="noimg" src="../assets/3.png" alt="">
			<img slot="activeimg" src="../assets/8.png" alt="">
		</Item>
		<Item title="购物车" order=4 :index="orderIndex" @childval="getCVal">
			<img slot="noimg" src="../assets/4.png" alt="">
			<img slot="activeimg" src="../assets/9.png" alt="">
		</Item>
	</div>
</template>

<script>
	import Item from '@/components/Item'
	export default {
		name: 'Tabbar',
		components:{
			Item
		},
		data(){
			return{
				orderIndex:1
			}
		},
		methods:{
			getCVal(val){
				console.log(val)
				this.orderIndex=val
			}
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.tabbar{
		width: 100%;
		display: flex;
		position: fixed;
		border: 1px solid gainsboro;
		left: 0;
		bottom: 0;
	}
</style>
