<template>
  <div>
    <div class="bar">
      <div class="itemBar">我的关注</div>
      <div class="gray">关注的用户</div>
      <i class="iconfont icon-select2"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.bar {
  display: flex;
  background-color: rgb(242, 242, 242);
  height: 13.33vw;
  text-align: center;
  border-bottom: 1px solid #ccc;
  .itemBar {
    text-align: center;
    line-height: 13.33vw;
    flex: 2;
    font-size: 3.56vw;
  }
  .gray {
    text-align: center;
    line-height: 13.33vw;
    flex: 1;
    color: slategrey;
  }
  i {
    line-height: 13.33vw;
    color: slategrey;
    margin-right: 3vw;
  }
}
</style>