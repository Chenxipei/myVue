<template>
	<div class="read">
		<cityList>
			<div slot="ciytlist" v-for="(item,index) in readArr" :key="index">
				<div class="imgbox">
					<img :src="item.cover_url" alt="">
				</div>
				<div class="details">
					<h3>{{item.title}}</h3>
					<p>
						作者：{{item.author}}
					</p>
				</div>
			</div>
		</cityList>
	</div>
</template>

<script>
	import cityList from "../../components/cityList.vue"
	export default {
		name: 'read',
		components: {
			cityList
		},
		data() {
			return {
				readArr: []
			}
		},
		mounted() {
			this.getReadDate()
		},
		methods: {
			getReadDate() {
				this.$axios
					.get("/data/read.json")
					.then(res => {
						console.log(res.data.recommend_one);
						this.readArr = res.data.recommend_one

					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	}
</script>
<style>
</style>
