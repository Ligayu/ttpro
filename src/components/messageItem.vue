<template>
  <div class="message">
    <div class="info_l">
      <p>{{postData.title}}</p>
    </div>
    <div class="info_img" v-if="postData.type == 1 &&postData.cover.length<=3">
      <img :src="postData.cover[0].url" alt />
      <img :src="postData.cover[1].url" alt v-if="postData.cover[1]" />
      <img :src="postData.cover[2].url" alt v-if="postData.cover[2]" />
    </div>
    <!-- 渲染视频 -->
    <div class="info_img" v-if="postData.type == 2 && postData.cover.length<3">
      <img :src="postData.cover[0].url" />
      <i class="iconfont icon-bofang"></i>
    </div>
    <div class="tips">
      <span>{{postData.user.nickname}}</span>
      <i>{{postData.comment_length}}</i>
      <i v-if="postData.comments">{{comment}}：{{postData.comments.length}}</i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["postData", "comment"]
};
</script>
<style lang="less" scoped>
.message {
  position: relative;
  height: 48.78vw;
  //   width: 94.56vw;
  margin: 7.22vw 2.78vw 2.78vw;
  background-color: white;
  border-radius: 2.78vw;
  padding-top: 4.44vw;
  padding-left: 2.22vw;

  //不换行
  p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .info_img {
    margin-top: 5.56vw;
    display: flex;
    width: 100%;
    overflow: auto;
    position: relative;
    img {
      width: 33.33vw;
      height: 21.44vw;
    }
    i {
      position: absolute;
      top: 8.89vw;
      left: 14.89vw;
      font-size: 5.89vw;
      color: gray;
    }
  }

  .tips {
    position: absolute;
    display: flex;
    font-size: 3.61vw;
    color: #ccc;
    bottom: 4.33vw;
    i {
      margin-left: 5.56vw;
      font-size: 2.8vw;
    }
  }
}
</style>