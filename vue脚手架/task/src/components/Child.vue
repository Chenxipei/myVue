<template>
    <div class="imgbox">
		<div  v-for="item in imgsrcP">
			<img :src="item" alt="">
		</div>
		
    </div>
</template>
<script>
export default {
    props:["imgsrcP"]
}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.imgbox{
		margin: 0 auto;
		width: 800px;
		height: 200px;
		display: flex;
		flex-wrap: wrap;
	}
	.imgbox div{
		padding: 10px ;
		width: 150px;
		height: 100px;
		margin: 10px 10px;
		border: 2px solid gainsboro;
		border-radius: 10px;
		overflow: hidden;
	}
	.imgbox img{
		width: 100%;
		height: 100%;
	}
</style>