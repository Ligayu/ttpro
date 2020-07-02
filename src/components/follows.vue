<template>
  <div class="follows" v-if="commentData">
    <div class="hd_follow">
      <img src alt />
      <div class="followTip">
        <p>{{commentData.user.nickname}}</p>
        <i>{{commentData.create_date.split('T')[0]}}</i>
      </div>
    </div>
    <parentComment :parentData="commentData.parent" v-if="commentData.parent"></parentComment>
    <div class="followContents">
      <span>{{commentData.content}}</span>
    </div>
  </div>
</template>

<script>
import parentComment from "@/Comment/parentComment.vue";
export default {
  props: ["commentData"],
  components: {
    parentComment
  }
};
</script>

<style lang="less" scoped>
.follows {
  // height: 72vw;
  padding: 4vw 0;
  border-bottom: 1px solid #ccc;
  .hd_follow {
    display: flex;
    img {
      width: 12.6vw;
      height: 12.6vw;
      background-color: aquamarine;
      border-radius: 8.33vw;
    }
    .followTip {
      flex: 1;
      height: 16.67vw;
      padding-top: 0.78vw;
      margin-left: 2.78vw;
      font-size: 3.44vw;
      p {
        height: 5.56vw;
      }
      i {
        display: block;
        margin-top: 1.11vw;
        height: 4.78vw;
      }
    }
    .followContents {
      display: flex;
      justify-content: space-between;

      /deep/ span {
        margin-top: 3.89vw;
        margin-left: 6vw;
        font-size: 3.61vw;
      }
    }
  }
}
</style>