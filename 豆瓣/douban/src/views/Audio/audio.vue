<template>
	<div class="">
		<Header HeaderTitle='广播'>
			<img slot='left' class="leftImg" src="../../assets/images/ic_status_search_user.png" />
			<img slot='right' class="rightImg" src="../../assets/images/ic_chat_green.png" />
		</Header>
	</div>
</template>

<script>
	import Header from '../../components/Header'
	export default {
		name: 'Audio',
		components: {
			Header
		}
	}
</script>