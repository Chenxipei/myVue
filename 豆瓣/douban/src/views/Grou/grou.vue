<template>
  <div class="grou">
   <Header HeaderTitle='小组'>
  		<img slot='left' class="leftImg" src="../../assets/images/ic_actionbar_search_icon.png"/>
  		<img slot='right' class="rightImg" src="../../assets/images/ic_chat_green.png"/>
  	</Header>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Header from '../../components/Header'
export default {
  name: 'Home',
 components:{
  	Header
  }
}
</script>
