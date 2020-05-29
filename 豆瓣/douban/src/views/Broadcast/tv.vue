<template>
	<div class="tv">
		<cityList>
			<div slot="ciytlist" v-for="(item,index) in tvArr" :key="index">
				<div class="imgbox">
					<img :src="item.cover" alt="">
				</div>
				<div class="details">
					<h3>{{item.title}}</h3>
					<div>
						<span class="colorY">评分:{{item.rate}}</span>
					</div>
				</div>
			</div>
		</cityList>
	</div>
</template>

<script>
	import cityList from "../../components/cityList.vue"
	export default {
		name: 'tv',
		components: {
			cityList
		},
		data() {
			return {
				tvArr: []
			}
		},
		mounted() {
			this.getTvData()
		},
		methods: {
			getTvData() {
				this.$axios
					.get("/data/tv.json")
					.then(res => {
						console.log(res.data.subjects);
						this.tvArr = res.data.subjects

					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	}
</script>
