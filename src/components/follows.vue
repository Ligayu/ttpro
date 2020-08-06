<template>
  <div class="follows" v-if="commentData">
    <div class="hd_follow">
      <img
        :src=" (commentData.user.head_img || 'https://tse1-mm.cn.bing.net/th/id/OIP.y-0xaF_0kfQtBIv7jmev9AHaHa?pid=Api&rs=1')|fixImgUrl"
        alt
      />
      <div class="followTip">
        <p>{{commentData.user.nickname}}</p>
        <i v-if="commentData.create_date">{{commentData.create_date.split('T')[0]}}</i>
      </div>
      <span @click="mainReply">回复</span>
    </div>
    <parentComment
      @parentReply="TomainReply"
      :parentData="commentData.parent"
      v-if="commentData.parent"
    ></parentComment>
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
    parentComment,
  },
  methods: {
    //从父评论传回来的父id和content
    TomainReply(userInfo) {
      this.$emit("ToReplay", userInfo);
      // console.log(userInfo);
    },
    //主评论的回复
    mainReply() {
      console.log(this.commentData);
      const userInfo = {
        parent_id: this.commentData.id,
        content: this.commentData.content,
        nickname: this.commentData.user.nickname,
      };
      this.$emit("ToReplay", userInfo);
    },
  },
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
    span {
      color: #ccc;
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
</style>