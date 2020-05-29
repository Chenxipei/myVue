<template>
  <div class="briadcast">
    <Header HeaderTitle="书影音">
      <img slot="left" class="leftImg" src="../../assets/images/ic_actionbar_search_icon.png" />
      <img slot="right" class="rightImg" src="../../assets/images/ic_chat_green.png" />
    </Header>
    <nav class="nav">
      <div :class="{active:currentIndex==0}" @click="currentIndex=0">
        <router-link to="/broadcast/film">电影</router-link>
      </div>
      <div :class="{active:currentIndex==1}" @click="currentIndex=1">
        <router-link to="/broadcast/read">读书</router-link>
      </div>
      <div :class="{active:currentIndex==2}" @click="currentIndex=2">
        <router-link to="/broadcast/tv">电视</router-link>
      </div>
      <div :class="{active:currentIndex==3}" @click="currentIndex=3">
        <router-link to="/broadcast/City">同城</router-link>
      </div>
      <div :class="{active:currentIndex==4}" @click="currentIndex=4">
        <router-link to="/broadcast/music">音乐</router-link>
      </div>
    </nav>
    <div class="navCon">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  name: "broadcast",
  components: {
    Header
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  mounted() {
    this.$router.push("broadcast/film");
  },
  methods: {}
};
</script>
<style lang="less">
.briadcast {
  padding-bottom: 200/100rem;
}
.nav {
  width: 100%;
  display: flex;
  border-bottom: 1px solid gainsboro;
  a {
    text-decoration: none;
    color: gray;
    display: block;
    width: 100%;
    height: 100%;
  }
  > div {
    padding: 10/100rem 0;
    flex: 1;
  }
  > div.active {
    background: #07d614;
    a {
      color: #fff;
    }
  }
}
</style>
