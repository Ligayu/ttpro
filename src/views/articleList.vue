<template>
  <div class="container">
    <div class="article" v-if="articleList ">
      <div class="art_hd">
        <newsBar @backClick="back"></newsBar>
      </div>
      <div class="art_content" v-if="articleList.type==1">
        <div class="contentTitle">
          <h3>{{articleList.title}}</h3>
          <div class="tips">
            <span>{{articleList.user.nickname}}</span>
            <i v-if="articleList.user.create_date">{{articleList.user.create_date.split('T')[0]}}</i>
          </div>
        </div>
        <!-- 当数据是字符串时，标签用v-html渲染 -->
        <div class="getContent" v-html="articleList.content"></div>

        <div class="con_footer">
          <div v-if="articleList.has_like==true" class="Btn" @click="agree">
            <i class="iconfont icon-zanpress zan"></i>
            <span>{{articleList.like_length}}</span>
          </div>
          <div v-else class="Btn disagreeColor" @click="agree">
            <i class="iconfont icon-zanpress diszan"></i>
            <span>{{articleList.like_length}}</span>
          </div>
          <!-- 当has_like为false时，点赞后有个爱心向上飘的动画 -->
          <i class="iconfont icon-main_girl likeAnimate" v-show="likeStatus"></i>
          <div v-if="articleList.has_follow==true" class="Btn focusBtn" @click="focus">已关注</div>
          <div v-else class="Btn focusBtn toFocus" @click="focus">关注</div>
        </div>
      </div>
      <!-- 渲染视频数据 -->
      <div class="art_video" v-if="articleList.type==2">
        <div class="contentTitle">
          <h3>{{articleList.title}}</h3>
          <div class="tips">
            <span>{{articleList.user.nickname}}</span>
            <i v-if="articleList.user.create_date">{{articleList.user.create_date.split('T')[0]}}</i>
          </div>
        </div>
        <div class="getContent">
          <!-- <video :src="$axios.defaults.baseURL+articleList.content"></video> -->
          <!-- poster为视频添加封面 -->
          <video
            poster="https://cn.bing.com/th?id=OHR.HierapolisTurkey_ZH-CN6067183569_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
            controls
            src="https://video.pearvideo.com/mp4/adshort/20200421/cont-1670293-15098199_adpkg-ad_hd.mp4"
          ></video>
        </div>
        <div class="con_footer">
          <div v-if="articleList.has_like==true" class="Btn" @click="agree">
            <i class="iconfont icon-zanpress zan"></i>
            <span>{{articleList.like_length}}</span>
          </div>
          <div v-else class="Btn disagreeColor" @click="agree">
            <i class="iconfont icon-zanpress diszan"></i>
            <span>{{articleList.like_length}}</span>
          </div>
          <!-- 当has_like为false时，点赞后有个爱心向上飘的动画 -->
          <i class="iconfont icon-main_girl likeAnimate" v-show="likeStatus"></i>
          <div v-if="articleList.has_follow==true" class="Btn focusBtn" @click="focus">已关注</div>
          <div v-else class="Btn focusBtn toFocus" @click="focus">关注</div>
        </div>
      </div>
      <div class="follows_con" v-if="transComments">
        <p>精彩跟帖</p>

        <!-- 回复的组件 -->
        <follows
          @ToReplay="Reply"
          v-for="(item,index) in transComments"
          :key="index"
          :commentData="item"
        ></follows>
        <articleBottom
          :transUser="articleList.user"
          :userid="$route.params.id"
          @toCollection="collection"
          :changeStar="articleList.has_star"
          :transInfo="transData"
          @reloadComment="reload"
          ref="controlInput"
        ></articleBottom>
      </div>
    </div>
  </div>
</template>

<script>
import newsBar from "@/components/newsBar";
import follows from "@/components/follows";
import articleBottom from "@/components/articleBottom";
export default {
  data() {
    return {
      articleList: null,
      likeStatus: "",
      transComments: [],
      transData: {},
    };
  },
  components: {
    newsBar,
    follows,
    articleBottom,
  },
  mounted() {
    //渲染文章信息
    this.$axios({
      url: "/post/" + this.$route.params.id,
      method: "get",
    }).then((res) => {
      this.articleList = res.data.data;
      console.log("aticle", this.articleList);
      console.log('dfa')
      console.log('dgs')
      console.log('latone')
      console.log('cao搞错了')
      console.log('latone')
      console.log('latone')
    });
    //渲染评论内容
    this.$axios({
      url: "/post_comment/" + this.$route.params.id,
      method: "get",
    }).then((res) => {
      console.log("comment", res.data);
      this.transComments = res.data.data;
      this.transComments.length = 3;
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    agree() {
      this.$axios({
        url: "/post_like/" + this.articleList.id,
        method: "get",
      }).then((res) => {
        if (res.data.message == "点赞成功") {
          this.articleList.like_length += 1;
          this.articleList.has_like = true;
          this.likeStatus = true;
        } else {
          this.articleList.like_length -= 1;
          this.articleList.has_like = false;
          this.likeStatus = false;
        }
      });
    },
    focus() {
      if (this.articleList.has_follow == true) {
        this.articleList.has_follow = false;
        this.$axios({
          url: "/user_unfollow/" + this.articleList.user.id,
          method: "get",
        }).then((res) => {});
      } else {
        this.articleList.has_follow = true;
        this.$axios({
          url: "/user_follows/" + this.articleList.user.id,
          method: "get",
        }).then((res) => {});
      }
    },
    collection() {
      this.$axios({
        url: "/post_star/" + this.articleList.id,
      }).then((res) => {
        console.log(res);
        if (res.data.message == "取消成功") {
          this.articleList.has_star = false;
        } else {
          this.articleList.has_star = true;
        }
      });
    },
    Reply(userInfo) {
      this.transData = userInfo;
      console.log("这里是传回来的数据");

      console.log(this.transData);
      this.$refs.controlInput.toSendcomment();
    },
    reload() {
      //渲染评论内容
      this.$axios({
        url: "/post_comment/" + this.$route.params.id,
        method: "get",
      }).then((res) => {
        console.log("comment", res.data);
        this.transComments = res.data.data;
        this.transComments.length = 3;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  //定义动画
  @keyframes LikeAni {
    0% {
      top: 0vw;
      opacity: 0;
    }
    25% {
      top: -1.11vw;
      opacity: 0.25;
    }
    50% {
      top: -2.78vw;
      opacity: 0.5;
    }
    75% {
      top: -3.89vw;
      opacity: 0.75;
    }
    100% {
      top: -5vw;
      opacity: 1;
    }
  }
  // background-color: rgb(216, 237, 242);
  height: 100%;
  .article {
    .art_content {
      height: 138vw;
      width: 94.6vw;
      margin: 7.22vw 2.78vw 2.78vw;
      background-color: white;
      border-radius: 2.78vw;
      padding: 4.44vw 2.22vw;
      overflow: auto;
      .tips {
        margin-top: 2.78vw;
        display: flex;
        color: #ccc;
        height: 6.44vw;
        line-height: 6.44vw;
        font-size: 3.89vw;
        i {
          margin-left: 4.44vw;
        }
      }
      .getContent {
        margin-top: 4.44vw;
        font-size: 3.8vw;
        width: 100%;
        /deep/ p {
          img {
            width: 100%;
          }
        }
        /deep/ .page {
          p {
            strong {
              margin: 8vw 0;
            }
            /deep/ a {
              width: 94.6vw;
              img {
                width: 100%;
                // width: 94.6vw;
                margin: 3.33vw 0;
              }
            }
          }
          .photo {
            color: #333;
            // font-size: 3.61vw;
            img {
              width: 100%;
              // width: 94.6vw;
              margin: 3.33vw 0;
            }
          }
        }
      }
      .con_footer {
        display: flex;
        margin: 11.11vw auto;
        height: 8.44vw;
        position: relative;
        .Btn {
          border: 1px solid #ccc;
          margin-left: 11vw;
          background: white;
          border-radius: 3.33vw;
          height: 8.44vw;
          line-height: 8.44vw;
          text-align: center;
          width: 22vw;
          font-weight: 600;
          font-size: 3.61vw;
          .zan {
            font-size: 3.61vw;
            color: rgb(255, 103, 0);
          }
          span {
            margin-left: 1.67vw;
          }
        }
        .disagreeColor {
          .diszan {
            color: black;
          }
        }
        .likeAnimate {
          position: absolute;
          top: 1.67vw;
          left: 16.67vw;
          color: pink;
          opacity: 0;
          animation: LikeAni 1s ease-in;
        }
        .focusBtn {
          font-weight: 600;
          font-size: 3.61vw;
          margin-left: 24.11vw;
        }
        .toFocus {
          color: rgb(255, 103, 0);
        }
      }
    }

    //视频样式
    .art_video {
      width: 94.6vw;
      margin: 7.22vw 2.78vw 2.78vw;
      background-color: white;
      border-radius: 2.78vw;
      padding: 4.44vw 2.22vw;
      .tips {
        margin-top: 2.78vw;
        display: flex;
        color: #ccc;
        height: 6.44vw;
        line-height: 6.44vw;
        font-size: 3.89vw;
        i {
          margin-left: 4.44vw;
        }
      }
      /deep/ .getContent {
        margin-top: 4.44vw;
        font-size: 3.8vw;
        width: 100%;
        video {
          width: 100%;
          margin: 3.33vw 0;
        }
        // /deep/ .page {
        //   span {
        //     strong {
        //       margin: 8vw 0;
        //     }
        //   }
        //   .photo {
        //     color: #333;
        //   }
        // }
      }
      .con_footer {
        display: flex;
        margin: 11.11vw auto;
        position: relative;
        .Btn {
          border: 1px solid #ccc;
          margin-left: 11.11vw;
          background: white;
          border-radius: 3.33vw;
          height: 8.44vw;
          line-height: 8.44vw;
          text-align: center;
          width: 22vw;
          font-weight: 600;
          font-size: 3.61vw;
          .zan {
            font-size: 3.61vw;
            color: rgb(255, 103, 0);
          }
          span {
            margin-left: 1.67vw;
          }
        }
        .disagreeColor {
          .diszan {
            color: black;
          }
        }
        .likeAnimate {
          position: absolute;
          top: 1.67vw;
          left: 16.67vw;
          color: pink;
          opacity: 0;
          animation: LikeAni 1s ease-in;
        }
        .focusBtn {
          font-weight: 600;
          font-size: 3.61vw;
          margin-left: 24.11vw;
        }
        .toFocus {
          color: rgb(255, 103, 0);
        }
      }
    }
    .follows_con {
      height: 102vw;
      width: 94.22vw;
      margin: 4.22vw 2.78vw 2.78vw;
      background-color: white;
      border-radius: 2.78vw;
      padding: 4.44vw 2.22vw 2.22vw;
      overflow: auto;
      position: relative;
      p {
        text-align: center;
      }
      // .articleBottom {
      //   /deep/ .littleFunctiom {
      //     position: fixed;
      //     bottom: 0;
      //   }
      // }
    }
  }
}
</style>