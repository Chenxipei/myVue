<template>
  <div class="">
  <Header HeaderTitle='书影音'>
  		<img slot='left' class="leftImg" src="../../assets/images/ic_actionbar_search_icon.png"/>
  		<img slot='right' class="rightImg" src="../../assets/images/ic_chat_green.png"/>
  	</Header>
  </div>
</template>

<script>
import Header from '../../components/Header'
export default {
  name: 'Home',
 components:{
  	Header
  }
}
</script>
