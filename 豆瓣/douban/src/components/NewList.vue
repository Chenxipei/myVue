.<template>
  <div class="newList">
    <div class="left">
      <slot name="newsTxt"></slot>
    </div>
    <div class="right">
      <img :src="imgsUrl" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "newList",
  props: ["imgsUrl"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.newList {
  box-sizing: border-box;
  text-align: left;
  width: 100%;
  display: flex;
  padding-top: 30/100rem;
  padding-bottom: 50/100rem;
  padding-left: 20/100rem;
  padding-right: 20/100rem;
  border-bottom: 1px solid gainsboro;
  > div {
    height: 200/100rem;
  }
  .left {
    width: 60%;
    
    h4 {
      font-size: 28/100rem;
      margin-bottom: 15/100rem;
    }
    p {
      font-size: 25/100rem;
      color: #b0acae;
      overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    }
    span {
      font-size: 20/100rem;
      color: #b0acae;
    }
  }
  .right {
    width: 40%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>