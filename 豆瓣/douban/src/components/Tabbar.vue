<template>
  <div class="tabbar">
    <item title="首页" makc='home' :current='current' @child='getV'>
        <img slot='imgnormal' src="../assets/images/ic_tab_home_normal.png" alt="">
        <img slot='imgactive' src="../assets/images/ic_tab_home_active.png" alt="">
    </item>
    <item title="书影音" makc='broadcast' :current='current' @child='getV'>
         <img slot='imgnormal' src="../assets/images/ic_tab_subject_normal.png" alt="">
        <img slot='imgactive' src="../assets/images/ic_tab_subject_active.png" alt="">
    </item>
    <item title="广播" makc='audio' :current='current' @child='getV'>
         <img slot='imgnormal' src="../assets/images/ic_tab_status_normal.png" alt="">
        <img slot='imgactive' src="../assets/images/ic_tab_status_active.png" alt="">
    </item>
    <item title="小组" makc='grou' :current='current' @child='getV'>
         <img slot='imgnormal' src="../assets/images/ic_tab_group_normal.png" alt="">
        <img slot='imgactive' src="../assets/images/ic_tab_group_active.png" alt="">
    </item>
    <item title="我的" makc='mine' :current='current' @child='getV'>
         <img slot='imgnormal' src="../assets/images/ic_tab_profile_normal.png" alt="">
        <img slot='imgactive' src="../assets/images/ic_tab_profile_active.png" alt="">
    </item>
  </div>
</template>
<script>
import item from "./Item";
export default {
  name: "tabbar",
  components: {
    item
  },
  data(){
      return{
          current:'home',
      }
  },
  methods: {
      getV(val){
          this.current = val
      }
  },
};
</script>
<style lang="less">
    .tabbar{
		justify-content: space-around;
		width: 100%;
		position: fixed;
        display: flex;
		left: 0;
		bottom: 0;
		border: 1px solid gainsboro;
		border-bottom:none ;
    }
</style>