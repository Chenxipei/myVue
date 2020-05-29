<template>
	<div class="music">
		<filmList v-for='(item,index) in musicArr' :key='index' :title='item.title'>
			<div class="fimlBox" slot="box">
				<div class="filmCon" v-for="(item,index) in item.group_list" :key="index">
					<img :src="item.cover_url" alt />
					<p class="name">{{item.title}}</p>
					<span class="score">评分：{{item.score}}</span>
				</div>
			</div>
		</filmList>
	</div>
</template>

<script>
	import filmList from "../../components/FilmList";
	export default {
		name: 'music',
		data() {
			return {
				musicArr: []
			}
		},
		components: {
			filmList
		},
		mounted() {
			this.getmusicData();
		},
		methods: {
			getmusicData() {
				this.$axios
					.get("/data/music.json")
					.then(res => {
						console.log(res.data.group);
						this.musicArr = res.data.group

					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	}
</script>>
