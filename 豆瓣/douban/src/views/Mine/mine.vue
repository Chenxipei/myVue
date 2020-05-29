<template>
  <div class="mine">
    <Header HeaderTitle="我的">
      <img slot="right" class="rightImg" src="../../assets/images/ic_settings.png" />
    </Header>
    <div class="manage">
      <div>
        <i class="icon iconfont icon-mima1"></i>
        密码管理
      </div>
      <div>
        <i class="icon iconfont icon-yinxingqia"></i>
        银行卡管理
      </div>
    </div>
    <ul class="list">
      <li>
        <span class="icon iconfont icon-bianji left-icon"></span>
        风险承受能力评估
        <i class="icon iconfont icon-youjiantou jiantou"></i>
      </li>
      <li>
        <span class="icon iconfont icon-17 left-icon"></span>
        安全保障
        <i class="icon iconfont icon-youjiantou jiantou"></i>
      </li>
      <li>
        <span class="icon iconfont icon-weibiaoti2fuzhi12 left-icon"></span>
        我的关注
        <i class="icon iconfont icon-youjiantou jiantou"></i>
      </li>
      <li>
        <span class="icon iconfont icon-bangzhu left-icon"></span>
        帮助中心
        <i class="icon iconfont icon-youjiantou jiantou"></i>
      </li>
      <li>
        <span class="icon iconfont icon-weibiaoti2fuzhi12 left-icon"></span>
        关于我么
        <i class="icon iconfont icon-youjiantou jiantou"></i>
      </li>
      <li>
        <span class="icon iconfont icon-jianchaquyu left-icon"></span>
        检查更新
        <i class="icon iconfont icon-youjiantou jiantou"></i>
      </li>
      <li>
        <span class="icon iconfont icon-service left-icon"></span>
        联系客服
        <i class="icon iconfont icon-youjiantou jiantou"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  name: "mine",
  components: {
    Header
  }
};
</script>
<style lang="less">
@import url("../../assets/iconfont/iconfont.css");
.mine {
  box-sizing: border-box;
  .manage {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 20/100rem 0;
    border-bottom: 1px solid gainsboro;
    font-size: 26/100rem;
    margin-bottom: 30/100rem;
    i {
      color: #45be59;
      font-size: 60/100rem;
      margin-bottom: 10/100rem;
      display: block;
    }
  }
  .list {
    text-align: left;
    li {
      padding: 25/100rem;
      border-bottom: 1px solid gainsboro;
      position: relative;
      font-size: 28/100rem;
      .left-icon {
        color: #45be59;
        font-size: 40/100rem;
      }
      .jiantou {
        position: absolute;
        right: 30/100rem;
        top: 25/100rem;
        color: #45be59;
        font-size: 45/100rem;
      }
    }
  }
}
</style>
