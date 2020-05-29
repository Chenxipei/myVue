<template>
  <div class="grouList">
    <h4>{{txt}}</h4>
    <slot name="groulist"></slot>
  </div>
</template>

<script>
export default {
  name: "grouList",
  components: {},
  props: ["txt"]
};
</script>
<style lang="less">
.grouList {
  text-align: left;
  box-sizing: border-box;
  padding: 20/100rem;
  li {
    border-bottom: 1px solid gainsboro;
    padding: 20/100rem 0;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20/100rem;
    .topleft {
      display: flex;
      align-items: center;
      font-size: 25/100rem;
    }
    .number {
      font-size: 25/100rem;
      color: #c1c1c1;
    }
    img {
      width: 100/100rem;
      height: 100/100rem;
      margin-right: 20/100rem;
    }
  }
  .txt {
    font-size: 25/100rem;
    color: #c1c1c1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    display: block;
  }
}
.moreGrou{
  margin: 20/100rem 0;
  text-align: center;
  font-size: 25/100rem;
  color: #42bd56;
}
</style>