<template>
	<div class="hello">
		<Child :arr='worksArr'></Child>
		<div class="buttonBox">
			<a href="#" v-show="current!=1" @click="current--">上一页</a>
			<a href="#" v-for="(item,index) in pages" :key="index" :class="{active:item==current}">
				{{item}}
			</a>
			<a href="#" v-show="current!=pagetotal" @click="current++">下一页</a>
		</div>
	</div>
</template>

<script>
	import Child from './Child.vue'
	export default {
		name: 'HelloWorld',
		components: {
			Child
		},
		data: function() {
			return {
				worksArr: [{
						title: '风景狙击手',
						member: 10,
						works: 80,
						url: '/img/pic_01.jpg'
					},
					{
						title: '叙事感',
						member: 17,
						works: 260,
						url: '/img/pic_02.jpg'
					},
					{
						title: '定焦世界',
						member: 122,
						works: 70,
						url: '/img/pic_03.jpg'
					},
					{
						title: '中华福乐园',
						member: 40,
						works: 330,
						url: '/img/pic_04.jpg'
					},
					{
						title: '卡啪',
						member: 190,
						works: 980,
						url: '/img/pic_05.jpg'
					},
					{
						title: '植物园',
						member: 111,
						works: 388,
						url: '/img/pic_06.jpg'
					}
				],
				current: 5,
				showitem: 5,
				pagetotal: 35
			}
		},
	computed:{
		pages: function(){
			let arr = []
			if(this.current<Math.min(this.showitem,this.pagetotal)){
				let mini = Math.min(this.showitem,this.pagetotal)
				for(let i=1;i<=mini;i++){
					arr.push(i)
				}
			}else{
				let start = this.current - Math.floor(this.showitem/2)
				if(start>this.pagetotal-this.showitem){
					start = this.pagetotal-this.showitem+1
				}
				for(let i=1;i<=this.showitem;i++){
					arr.push(start++)
				}
			}
			return arr
		}
	}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	a {
		border: 1px solid lightgray;
		padding: 5px 15px;
		color: #118ece;
		text-decoration: none;
		margin: 0 5px;
	}

	a:hover {
		background: #088fd3;
		color: #fff;
	}

	.buttonBox {
		margin: 10px 0;
	}

	.active {
		background: #088fd3;
		color: #fff;
	}
</style>
