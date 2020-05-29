.<template>
  <div class="filmList">
    <h3 class="title">{{title}}</h3>
    <slot name="box"></slot>
  </div>
</template>

<script>
export default {
  name: "filmList",
  props: ["title"]
};
</script>

<style lang="less">
.filmList {
  box-sizing: border-box;
  padding: 20/100rem;
  text-align: left;
  width: 100%;
  height: 500/100rem;
  margin-bottom: 30/100rem;
  .title {
    font-size: 28/100rem;
    margin-bottom: 20/100rem;
  }
  .fimlBox {
    overflow-x: scroll;
    white-space: nowrap;
  }
  .filmCon {
    display: inline-block;
    width: 200/100rem;
    margin: 0 10/100rem;
    text-align: center;

    .name {
      font-size: 25/100rem;
      text-overflow: ellipsis;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .score {
      font-size: 25/100rem;
      color: #cbcbcb;
    }
    img {
      width: 100%;
      height: 350/100rem;
    }
  }
}
</style>
