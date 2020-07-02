<template>
  <div class="articleBottom">
    <div class="moreFollows" @click="$router.push('/MoreComment/'+userid)">更多评论</div>
    <div class="littleFunctiom">
      <!-- 评论框的切换 -->
      <div class="function_l">
        <input type="text" placeholder="写评论" v-if="showTextarea==true" />
        <textarea rows="3"></textarea>
      </div>
      <div class="function_r">
        <!-- 评论 -->
        <i class="iconfont icon-pinglun"></i>
        <!-- 收藏状态切换 -->
        <i v-if="changeStar==false" class="iconfont icon-shoucang" @click="star"></i>
        <i v-else class="iconfont icon-shoucangdianjihou" @click="star"></i>
        <!-- 分享 -->
        <i class="iconfont icon-fenxiang"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    star() {
      this.$emit("toCollection");
    }
  },
  props: ["userid", "changeStar"]
};
</script>

<style lang="less" scoped>
.articleBottom {
  .moreFollows {
    height: 7.22vw;
    width: 32vw;
    border-radius: 2.22vw;
    border: 1px solid black;
    text-align: center;
    line-height: 7.22vw;
    margin: 7.56vw auto 0;
  }
  .littleFunctiom {
    display: flex;
    // height: 9vw;
    margin-top: 12vw;
    align-items: flex-end;
    .function_l {
      margin-right: 3.67vw;
      textarea {
        resize: none;
      }
      input {
        height: 9vw;
        width: 44vw;
        border-radius: 4.67vw;
        text-indent: 4.78vw;
      }
    }
    .function_r {
      flex: 1;
      i {
        margin-left: 6.44vw;
        line-height: 9vw;
        font-size: 6.61vw;
      }
    }
  }
}
</style>