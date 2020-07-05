<template>
  <div class="replayBar">
    <div class="time">
      <span>{{transComment.create_date.split('T')[0]}}</span>
      <i>{{transComment.create_date.split('T')[1].split('.')[0]}}</i>
    </div>
    <!-- 显示父评论 -->
    <div class="parent">
      <div class="parent_content" v-if="transComment.parent">
        <div class="ParentTip">
          <p>{{transComment.parent.user.nickname}}</p>
          <i>{{transComment.parent.create_date.split('T')[0]}}</i>
        </div>
        <div class="mainCon">
          <span>{{transComment.parent.content}}</span>
          <!-- <i @click="parentReply">回复</i> -->
        </div>
      </div>
    </div>

    <div class="content">{{transComment.content}}</div>
    <p>原文 ：{{transComment.post.title}}</p>
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
  .parent {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 2.68vw;
    .parent_content {
      padding-top: 1.67vw;
      justify-content: space-between;
      // height: 19.22vw;
      width: 66.67vw;
      background-color: khaki;
      margin-bottom: 2.67vw;
      border-radius: 2.67vw;
      align-items: center;

      .ParentTip {
        margin-left: 1.67vw;
        font-size: 4vw;
        i {
          color: whitesmoke;
        }
      }
      .mainCon {
        display: flex;
        text-align: left;
        margin: 2.67vw 0;

        span {
          margin: 0 4vw 2vw;
          flex: 1;
        }
        i {
          font-style: normal;
          margin: 0 2.78vw;
          font-size: 3.61vw;
          color: #ccc;
        }
      }
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