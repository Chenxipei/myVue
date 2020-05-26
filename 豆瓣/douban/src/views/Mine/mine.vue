<template>
  <div class="mine">
   <Header HeaderTitle='我的'>
  		<img slot='right' class="rightImg" src="../../assets/images/ic_settings.png"/>
  	</Header>
  </div>
</template>

<script>
import Header from '../../components/Header'
export default {
  name: 'mine',
  components:{
  	Header
  }
}
</script>
