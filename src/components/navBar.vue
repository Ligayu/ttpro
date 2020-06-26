<template>
  <div class="bar" @click="actionSheet">
    <div class="itemBar">{{itemBar}}</div>
    <div class="barContent">{{barContent}}</div>
    <i class="iconfont icon-select2"></i>
  </div>
</template>

<script>
export default {
  props: ["itemBar", "barContent"],
  methods: {
    actionSheet() {
      this.$emit("aSheet");
    }
  }
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
    text-align: left;
    padding-left: 7.56vw;
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