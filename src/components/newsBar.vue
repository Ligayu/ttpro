<template>
  <div class="newsBar">
    <i class="iconfont icon-tuichu"></i>
    <span class="iconfont icon-longmao"></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.newsBar {
  display: flex;
  height: 14.33vw;
  line-height: 14.33vw;
  background-color: khaki;

  i {
    flex: 1;
    text-align: left;
    padding-left: 2.78vw;
    font-size: 9vw;
  }
  span {
    text-align: right;
    flex: 1;
    padding-right: 2.78vw;
    font-size: 7vw;
  }
}
</style>