<template>
	<div class="about">
		<div class="buttonBox">
			<a href="#" v-show="current!=1" @click="current--">上一页</a>
			<a href="#" v-for="(item,index) in pages" :key="index" :class="{active:item==current}" @click="fn(item)">
				{{item}}
			</a>
			<a href="#" v-show="current!=pagetotal" @click="current++">下一页</a>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Pages',
		data: function() {
			return {
				current: 1,
				showitem: 5,
				pagetotal: 35
			}
		},
		computed: {
			pages: function() {
				let arr = []
				if (this.current < Math.min(this.showitem, this.pagetotal)) {
					let mini = Math.min(this.showitem, this.pagetotal)
					for (let i = 1; i <= mini; i++) {
						arr.push(i)
					}
				} else {
					let start = this.current - Math.floor(this.showitem / 2)
					if (start > this.pagetotal - this.showitem) {
						start = this.pagetotal - this.showitem + 1
					}
					for (let i = 1; i <= this.showitem; i++) {
						arr.push(start++)
					}
				}
				return arr
			}
		},
		methods:{
			fn(item){
				this.current = item
			}
		}
	}
</script>
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
