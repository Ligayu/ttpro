<template>
  <div class="articleBottom">
    <div class="moreFollows" @click="$router.push('/MoreComment/'+userid)">更多评论</div>
    <!-- 这里的id也可以直接使用父组件的上级链接传给父组件的id，$route.params.id -->
    <!-- 评论框的切换 -->
    <div class="another_littleFunction" v-if="isTextarea">
      <textarea
        rows="3"
        :placeholder="'回复@'+transInfo.nickname"
        @blur="toInput"
        ref="textarea"
        v-model="content"
      ></textarea>
      <span @click="sendComment">发送</span>
    </div>
    <div class="littleFunctiom" v-if="!isTextarea">
      <div class="function_l">
        <input type="text" placeholder="写评论" @focus="toSendcomment" :value="content" />
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
    <!-- 过渡动画 -->
    <van-popup class="gif" v-model="show">
      <img src="@/assets/02.gif" alt />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTextarea: false,
      content: "",
      show: false
    };
  },
  methods: {
    star() {
      this.$emit("toCollection");
    },
    toSendcomment() {
      this.isTextarea = true;
      this.$nextTick(() => {
        this.$refs.textarea.focus();
      });
    },
    toInput() {
      setTimeout(() => {
        this.isTextarea = false;
      }, 100);
    },
    sendComment() {
      const content = this.content;
      console.log(content);

      const data = {
        content
      };
      if (this.transInfo.parent_id) {
        data.parent_id = this.transInfo.parent_id;
      }
      this.$axios({
        url: "/post_comment/" + this.userid,
        data: data,
        method: "post"
      }).then(res => {
        console.log(res);
        this.content = "";
        //显示过渡动画
        this.show = true;
        setTimeout(() => {
          this.show = false;
          location.reload();
        }, 3000);
      });
    }
  },
  props: ["userid", "changeStar", "setPlaceholder", "transInfo"]
};
</script>

<style lang="less" scoped>
.articleBottom {
  // position: relative;
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
    // position: fixed;
    bottom: 0;
    display: flex;
    // height: 9vw;
    margin-top: 12vw;
    align-items: flex-end;
    .function_l {
      margin-right: 3.67vw;
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
  .another_littleFunction {
    display: flex;
    // height: 9vw;
    margin-top: 12vw;
    align-items: flex-end;
    textarea {
      resize: none;
      margin-right: 6.66vw;
      text-indent: 1.11vw;
      font-size: 4vw;
    }
    span {
      border: 1px solid #ccc;
      height: 8.56vw;
      line-height: 8.56vw;
      width: 17.33vw;
      border-radius: 4.22vw;
      background-color: rgb(255, 103, 0);
      text-align: center;
    }
  }
}
</style>