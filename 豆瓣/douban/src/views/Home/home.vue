<template>
	<div class="home">
		<!-- 头部 -->
		<Header hasbg=true>
			<div slot='search' class="search">
				<img class="searchImg" src="../../assets/images/ic_group_search_small.png" />
				<input type="text" name="" id="" value="" placeholder="影视 图书 唱片 小组等" />
				<img class="scanImg" src="../../assets/images/ic_scan_gray.png" />
			</div>
			<img slot='right' class="rightImg" src="../../assets/images/ic_chat_white.png" alt="" />
		</Header>
		<!-- 轮播图区 -->
		<Banner swiperName='homeBanner' paginationStyle='right'>
			<div slot='swiper-con' class="swiper-slide"><img src="../../assets/images/banner/01.jpg" alt=""></div>
			<div slot='swiper-con' class="swiper-slide"><img src="../../assets/images/banner/02.jpg" alt=""></div>
			<div slot='swiper-con' class="swiper-slide"><img src="../../assets/images/banner/03.jpg" alt=""></div>
		</Banner>
		<newList v-for='(item,index) in homeArr' :key='index' :imgsUrl='item.target.cover_url'>
			<div slot='newsTxt'>
				<h4>{{item.title}}</h4>
				<p>{{item.target.desc}}</p>
				<span>作者:{{item.target.author.name}}</span>
			</div>
		</newList>
	</div>
</template>

<script>
	import Banner from '../../components/Banner'
	import Header from '../../components/Header'
	import newList from '../../components/NewList'
	export default {
		name: 'Home',
		components: {
			Header,
			Banner,
			newList
		},
		
		data(){
			return{
				homeArr:[]
			}
		},
		mounted() {
			this.getHomeData()
		},
		methods: {
			getHomeData(){
				this.$axios.get('/data/homeData.json')
				.then(res=>{
					console.log(res.data.recommend_feeds)
					this.homeArr=res.data.recommend_feeds
				})
				.catch(err=>{
					console.log(err)
				})
			}
		},
	}
</script>
<style lang="less">
.home{
	padding-bottom: 100/100rem;
}
</style>
