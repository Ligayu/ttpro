<template>
  <div class="replayBar">
    <div class="time">
      <span>2019-10-10</span>
      <i>10:25</i>
    </div>
    <div class="content">{{transComment.content}}</div>
    <p>原文：阿信分享《说好不哭》幕后故事：只听真心付出萨芬大师傅打发发</p>
    <i class="iconfont icon-select2 more" @click="toMore"></i>
  </div>
</template>

<script>
export default {
  props: ["transComment"],
  methods: {
    toMore() {
      this.$emit("more");
    }
  }
};
</script>

<style lang="less" scoped>
.replayBar {
  padding: 3.89vw 2.78vw;
  background-color: white;
  font-size: 2.61vw;
  border-bottom: 1px solid #ccc;
  position: relative;
  .time {
    color: wheat;
    i {
      margin-left: 1.67vw;
    }
  }
  .content {
    margin: 12px 0;
    font-size: 4vw;
  }
  p {
    color: #ccc;
    //不换行
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .more {
    position: absolute;
    bottom: 4vw;
    right: 1.67vw;
    color: #ccc;
    font-size: 2vw;
  }
}
</style>