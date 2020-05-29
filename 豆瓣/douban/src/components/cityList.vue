<template>
	<div class="cityList">
		<slot name="h2title"></slot>
		<div class="conbox">
			<slot name='ciytlist'></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cityList',
		props: ["txt"]
	}
</script>

<style lang="less">
	.cityList {
		box-sizing: border-box;
		width: 100%;
		text-align: left;
		padding: 30/100rem 20/100rem;
		h2{
			background: #07d614;
			border-bottom:1px solid gainsboro ;
			color: #fff;
			padding: 10/100rem 0;
			text-align: center;
			border-radius:20/100rem ;
			margin-bottom:20/100rem ;
		}
		.conbox {
			display: flex;
			flex-wrap: wrap;
			
			>div {
				width: 50%;
				padding: 10/100rem;
				box-sizing: border-box;
				
			}
		}

		.imgbox {
			width: 100%;
			height: 300/100rem;
			text-align: center;
			border-radius:30/100rem ;
			overflow: hidden;

			img {
				width: 100%;
				height: 100%;
			}
		}

		.details {
			font-size: 25/100rem;
			p{
				margin: 10/100rem 0;
			}
			h3,
			.address {
				margin: 10/100rem 0;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				color: gray;
			}

			.colorY {
				color: red;
				font-size: 20/100rem;
			}
		}
	}
</style>
