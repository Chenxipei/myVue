<template>
	<div class="home">
		<Header hasbg=true>
			<div slot='search' class="search">
				<img class="searchImg" src="../../assets/images/ic_group_search_small.png" />
				<input type="text" name="" id="" value="" placeholder="影视 图书 唱片 小组等" />
				<img class="scanImg" src="../../assets/images/ic_scan_gray.png" />
			</div>
			<img slot='right' class="rightImg" src="../../assets/images/ic_chat_white.png" alt="" />
		</Header>
		<Banner swiperName='banner1' paginationStyle='right'>
			<div slot='swiper-con' class="swiper-slide"><img src="../../assets/images/banner/01.jpg" alt=""></div>
			<div slot='swiper-con' class="swiper-slide"><img src="../../assets/images/banner/02.jpg" alt=""></div>
			<div slot='swiper-con' class="swiper-slide"><img src="../../assets/images/banner/03.jpg" alt=""></div>
		</Banner>
		<Banner paginationType='progressbar' swiperName='banner2' effectType='coverflow'  paginationStyle='bottom'>
			<div slot='swiper-con' class="swiper-slide"><img src="../../assets/images/banner/02.jpg" alt=""></div>
			<div slot='swiper-con' class="swiper-slide"><img src="../../assets/images/banner/03.jpg" alt=""></div>
		</Banner>
		<Banner swiperName='banner3' paginationStyle='left' effectType='cube' paginationType='fraction'>
			<div slot='swiper-con' class="swiper-slide"><img src="../../assets/images/banner/01.jpg" alt=""></div>
			<div slot='swiper-con' class="swiper-slide"><img src="../../assets/images/banner/02.jpg" alt=""></div>
			<div slot='swiper-con' class="swiper-slide"><img src="../../assets/images/banner/03.jpg" alt=""></div>
		</Banner>
	</div>
</template>

<script>
	import Banner from '../../components/Banner'
	import Header from '../../components/Header'
	export default {
		name: 'Home',
		components: {
			Header,
			Banner
		}
	}
</script>
<style lang="less">

</style>
