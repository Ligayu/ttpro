<template>
  <div class="backBar">
    <i class="iconfont icon-tuichu"></i>
    <span>{{hd_title}}</span>
  </div>
</template>

<script>
export default {
  props: ["hd_title"]
};
</script>

<style lang="less" scoped>
.backBar {
  display: flex;
  text-align: center;
  height: 14.33vw;
  line-height: 14.33vw;
  background-color: rgb(216, 237, 242);
  i {
    font-size: 9.56vw;
  }
  span {
    flex: 1;
    font-size: 5vw;
    font-weight: 700;
    padding-right: 10.56vw;
  }
}
</style>