<template>
	<div class="box">
		<h3>摄影社区热门小镇</h3>
		<div class="imgbox">
			<div v-for="(item,index) in arr" :key="index">
				<img :src="item.url" alt="">
				<!-- <div> -->
					<p class="title">
						{{item.title}}
					</p>
					<p class="gray">
						成员:{{item.member}}
					</p>
					<p class="gray">
						作品:{{item.works}}
					</p>
				<!-- </div> -->
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Child",
		props: {
			arr: Array
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.box {
		padding: 20px;
		text-align: left;
		margin: 0 auto;
		width: 600px;
		border: 1px solid gray;
	}

	.imgbox {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.imgbox>div {
		/* display: flex; */
		width: 25.999999%;
		margin: 10px 0;
	}

	.imgbox img {
		float: left;
		margin-right: 10px;
	}

	.title {
		color: #b0c8da;

	}

	.gray {
		color: #b4b6b2;

	}

	p {
		font-size: 13px;
	}
</style>
