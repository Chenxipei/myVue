<template>
  <div class="header" :class="{bg:hasbg}">
  	{{HeaderTitle}}
  	<slot name="left"></slot>
  	<slot name="right"></slot>
  	<slot name='search'></slot>
  </div>
</template>

<script>

export default {
  name: 'HeaderTop',
  props: ['HeaderTitle','hasbg']
}
</script>
<style lang="less">
	.header{
		color: grey;
		border-bottom: 1px solid gainsboro;
		width: 100%;
		height: 90/100rem;
		line-height: 90/100rem;
		background: #f7f7f7;
		position: relative;
		
		img{
			position: absolute;	
			width: 50/100rem;
			top: 20/100rem;
		}
		.leftImg{
			right: 105/100rem;
		}
		.rightImg{
			right: 25/100rem;
		}
		.search{
			width: 83%;
			height: 65/100rem;
			margin-left: 20/100rem;
			position: relative;
			
			input{
				border: none;
				width: 100%;
				height: 100%;
				border-radius:10px;
				text-indent: 80/100rem;
			}
			img{
				width: 45/100rem;
				top: 25/100rem;
			}
			.searchImg{
				left: 10/100rem;
			}
			.scanImg{
				right: 20/100rem;
			}
		}
	}
	.bg{
			background-color: #48bd5a;
		}
</style>
