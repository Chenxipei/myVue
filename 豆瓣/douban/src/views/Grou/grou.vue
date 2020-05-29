<template>
  <div class="grou">
    <Header HeaderTitle="小组">
      <img slot="left" class="leftImg" src="../../assets/images/ic_actionbar_search_icon.png" />
      <img slot="right" class="rightImg" src="../../assets/images/ic_chat_green.png" />
    </Header>
    <!-- 新组 -->
    <grouList :txt="item.title" v-for="(item,index) in newGroup" :key="index">
      <ul slot="groulist" v-for="(item,index) in item.group_list" :key="index">
        <li>
          <div class="top">
            <div class="topleft">
              <img :src="item.img_url" alt />
              {{item.group_name}}
            </div>
            <div class="number">{{item.group_member}}</div>
          </div>
          <span class="txt">{{item.topic_title}}</span>
        </li>
      </ul>
    </grouList>
    <div class="moreGrou" @click="getmoreGrou()">更多相关小组</div>
  </div>
</template>
<script>
import Header from "../../components/Header";
import grouList from "../../components/grouList";
export default {
  name: "Home",
  components: {
    Header,
    grouList
  },
  data() {
    return {
      newGroup: [],
      index:0,
    };
  },
  mounted() {
    this.getGrou();
  },
  methods: {
    getGrou() {
      this.$axios
        .get("/data/groupData.json")
        .then(res => {
          console.log(res.data.group);
          this.newGroup.push(res.data.group[0]);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getmoreGrou(){
      this.index ++
      this.$axios
        .get("/data/groupData.json")
        .then(res => {
          console.log(res.data.group);
          this.newGroup.push(res.data.group[this.index]);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less">
  .grou{
    padding-bottom:150/100rem ;
  }
</style>
