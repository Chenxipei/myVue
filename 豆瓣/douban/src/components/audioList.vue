<template>
  <div class="audioList">
    <div class="headPortrait">
      <div>豆</div>
    </div>
    <div class="leftCon">
      <p class="name">
        豆瓣
        <span class="grayColor">写了日记</span>
      </p>
      <span class="day">2018-05-23 10:39:23</span>
      <div class="txtBox">
        <h5>5月24日凌晨3:00~6:00豆瓣停机维护</h5>
        <span class="txt">
          因业务发展需要，豆瓣计划于5月24日（星期四）凌晨3:00~6:00
          对服务器进行机房迁移，迁移期间全部豆瓣相关...
        </span>
      </div>
      <div class="txtFunction">
        <span>
          <i class="icon iconfont icondianzan"></i> 29
        </span>
        <span>
          <i class="icon iconfont iconpinglun"></i> 29
        </span>
        <span>
          <i class="icon iconfont iconfenxiang"></i> 29
        </span>
        <span>
          <i class="icon iconfont icongengduo"></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "audioList"
};
</script>
<style lang="less">
@import url("../assets/iconfont/fonticon/iconfont.css");
.audioList {
  box-sizing: border-box;
  padding: 20/100rem;
  text-align: left;
  display: flex;
  border-bottom: 1px solid gainsboro;
  .name {
    font-size: 26/100rem;
  }
  .grayColor {
    color: #dddddd;
  }
  .headPortrait {
    width: 100/100rem;
    height: 100/100rem;
    div {
      margin: 0 auto;
      width: 70/100rem;
      height: 70/100rem;
      text-align: center;
      background: #09ba14;
      line-height: 80/100rem;
      border-radius: 50%;
      color: #fff;
      font-size: 50/100rem;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .day {
    font-size: 20/100rem;
    color: gainsboro;
  }
  .txtBox {
    background: #f9f9f9;
    padding: 30/100rem;
    width: 380/100rem;
    h5 {
      font-weight: 200;
      font-size: 30/100rem;
    }
    .txt {
      font-size: 22/100rem;
      color: gainsboro;
    }
  }
  .txtFunction {
    margin-top: 50/100rem;
    display: flex;
    justify-content: space-between;
    font-size: 25/100rem;
    color: gray;
    i {
      font-size: 25/100rem;
    }
  }
}
</style>