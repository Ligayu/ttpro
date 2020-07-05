<template>
  <div class="newsBar">
    <i class="iconfont icon-tuichu" @click="backBtn"></i>
    <h3>{{title}}</h3>
    <span class="iconfont icon-longmao"></span>
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    backBtn() {
      this.$emit("backClick");
    }
  }
};
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