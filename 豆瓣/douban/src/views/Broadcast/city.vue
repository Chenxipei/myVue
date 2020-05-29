<template>
	<div class="city">
		<cityList v-for="(item,index) in cityArr" :key="index">
			<h2 slot='h2title'>{{item.title}}</h2>
			<div slot="ciytlist"v-for="(item,index) in item.city_list" :key="index">
				<div class="imgbox">
					<img :src="item.img_url" alt="">
				</div>
				<div class="details">
					<h3>{{item.group_name}}</h3>
					<div>
						<span class="colorY">时间:{{item.group_time}}</span>
					</div>
					<p class="address">
						地址：{{item.group_address}}
					</p>
				</div>
			</div>
		</cityList>
	</div>
</template>

<script>
	import cityList from "../../components/cityList.vue"
	import newList from '../../components/NewList'
	export default {
		name: 'city',
		components: {
			cityList,
			newList
		},
		data() {
			return {
				cityArr: []
			}
		},
		mounted() {
			this.getCityData()
		},
		methods: {
			getCityData() {
				this.$axios
					.get("/data/city.json")
					.then(res => {
						console.log(res.data.city);
						this.cityArr = res.data.city
					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	}
</script>
