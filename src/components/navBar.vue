<template>
  <div>
    <div class="bar">
      <div class="itemBar">{{itemBar}}</div>
      <div class="barContent">{{barContent}}</div>
      <i class="iconfont icon-select2"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["itemBar", "barContent"]
};
</script>

<style lang="less" scoped>
.bar {
  display: flex;
  // background-color: rgb(242, 242, 242);
  background-color: white;
  height: 13.33vw;
  text-align: center;
  border-bottom: 1px solid #ccc;
  .itemBar {
    text-align: center;
    line-height: 13.33vw;
    flex: 2;
    font-size: 4.56vw;
  }
  .barContent {
    text-align: right;
    line-height: 13.33vw;
    flex: 1;
    color: slategrey;
    font-size: 3.56vw;
  }
  i {
    line-height: 13.33vw;
    color: slategrey;
    margin-right: 3vw;
    font-size: 3.56vw;
  }
}
</style>