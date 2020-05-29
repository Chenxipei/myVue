<template>
  <div class="Audio">
    <Header HeaderTitle="广播">
      <img slot="left" class="leftImg" src="../../assets/images/ic_status_search_user.png" />
      <img slot="right" class="rightImg" src="../../assets/images/ic_chat_green.png" />
    </Header>
    <div class="loginuser">
      <span class="userLogin">
        <i class="icon iconfont icon-weibiaoti2fuzhi12 left-icon"></i>
      </span>
	  <span class="colorgray">
			登录发广播
	  </span>
    </div>
    <audioList></audioList>
    <audioList></audioList>
  </div>
</template>

<script>
import Header from "../../components/Header";
import audioList from "../../components/audioList";
export default {
  name: "Audio",
  components: {
    Header,
    audioList
  }
};
</script>
<style lang="less">
@import url("../../assets/iconfont/iconfont.css");
.loginuser{
	border-bottom:1px solid gainsboro ;
	text-align: left;
	padding: 20/100rem;
}	
.userLogin{
	width: 60/100rem;
	height: 60/100rem;
	background: #f9f9f9;
	display: inline-block;
	border-radius:50%;
	text-align: center;
	i{
		font-size:50/100rem ;
	}
	
}
.colorgray{
		color: gainsboro;
	}
</style>