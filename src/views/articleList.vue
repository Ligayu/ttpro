<template>
  <div class="container">
    <div class="article" v-if="articleList">
      <div class="art_hd">
        <newsBar @backClick="back"></newsBar>
      </div>
      <div class="art_content" v-if="articleList.type==1">
        <div class="contentTitle">
          <h3>{{articleList.title}}</h3>
          <div class="tips">
            <span>{{articleList.user.nickname}}</span>
            <i>{{articleList.user.create_date.split('T')[0]}}</i>
          </div>
        </div>
        <div class="getContent" v-html="articleList.content"></div>
        <div class="con_footer">
          <div v-if="articleList.has_like==true" class="Btn" @click="agree">
            <i class="iconfont icon-zanpress"></i>
            <span>{{articleList.comment_length}}</span>
          </div>
          <div v-else class="Btn disagreeColor" @click="agree">
            <i class="iconfont icon-zanpress"></i>
            <span>{{articleList.comment_length}}</span>
          </div>
          <div class="Btn btnLeft">已关注</div>
        </div>
      </div>
      <!-- 渲染视频数据 -->
      <div class="art_video" v-if="articleList.type==2">
        <div class="contentTitle">
          <h3>{{articleList.title}}</h3>
          <div class="tips">
            <span>{{articleList.user.nickname}}</span>
            <i>{{articleList.user.create_date.split('T')[0]}}</i>
          </div>
        </div>
        <div class="getContent">
          <video :src="$axios.defaults.baseURL+articleList.content"></video>
        </div>
        <div class="con_footer">
          <div v-if="articleList.has_like==true" class="Btn" @click="agree">
            <i class="iconfont icon-zanpress"></i>
            <span>{{articleList.comment_length}}</span>
          </div>
          <div v-else class="Btn disagreeColor" @click="agree">
            <i class="iconfont icon-zanpress"></i>
            <span>{{articleList.comment_length}}</span>
          </div>
          <div v-if="articleList.has_star==true" class="Btn starBtn" @click="star">已关注</div>
          <div v-else class="Btn starBtn toStar" @click="star">关注</div>
        </div>
      </div>
      <div class="follows_con">
        <p>精彩跟帖</p>
        <follows></follows>
        <follows></follows>
        <follows></follows>
      </div>
    </div>
  </div>
</template>

<script>
import newsBar from "@/components/newsBar";
import follows from "@/components/follows";
export default {
  data() {
    return {
      articleList: null
    };
  },

  components: {
    newsBar,
    follows
  },
  mounted() {
    this.$axios({
      url: "/post/" + this.$route.params.id,
      method: "get"
    }).then(res => {
      this.articleList = res.data.data;
      console.log(this.articleList);
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    agree() {
      this.$axios({
        url: "/post_like/" + this.articleList.id,
        method: "get"
      }).then(res => {
        if (res.data.message == "点赞成功") {
          this.articleList.comment_length += 1;
          this.articleList.has_like = true;
        } else {
          this.articleList.comment_length -= 1;
          this.articleList.has_like = false;
        }
      });
    },
    star() {
      this.$axios({
        url: "/post_star/" + this.articleList.id,
        method: "get"
      }).then(res => {
        console.log(res.data);
        if (res.data.message == "收藏成功") {
          this.articleList.has_star = true;
        } else {
          this.articleList.has_star = false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  // background-color: rgb(216, 237, 242);
  height: 100%;
  .article {
    .art_content {
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
      .getContent {
        margin-top: 4.44vw;
        font-size: 3.8vw;
        /deep/ .page {
          p {
            strong {
              margin: 8vw 0;
            }
          }
          .photo {
            color: #333;

            // font-size: 3.61vw;
            img {
              width: 100%;
              margin: 3.33vw 0;
            }
          }
        }
      }
      .con_footer {
        display: flex;
        margin: 11.11vw auto;
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
          i {
            font-size: 3.61vw;
            color: rgb(255, 103, 0);
          }
          span {
            margin-left: 1.67vw;
          }
        }
        .disagreeColor {
          i {
            color: black;
          }
        }
        .starBtn {
          font-weight: 600;
          font-size: 3.61vw;
          margin-left: 24.11vw;
        }
        .toStar {
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
      .getContent {
        margin-top: 4.44vw;
        font-size: 3.8vw;
        /deep/ .page {
          p {
            strong {
              margin: 8vw 0;
            }
          }
          .photo {
            color: #333;

            // font-size: 3.61vw;
            img {
              width: 100%;
              margin: 3.33vw 0;
            }
          }
        }
      }
      .con_footer {
        display: flex;
        margin: 11.11vw auto;
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
          i {
            font-size: 3.61vw;
            color: rgb(255, 103, 0);
          }
          span {
            margin-left: 1.67vw;
          }
        }
        .disagreeColor {
          i {
            color: black;
          }
        }
        .starBtn {
          font-weight: 600;
          font-size: 3.61vw;
          margin-left: 24.11vw;
        }
        .toStar {
          color: rgb(255, 103, 0);
        }
      }
    }
    .follows_con {
      height: 86.33vw;
      width: 94.22vw;
      margin: 4.22vw 2.78vw 2.78vw;
      background-color: white;
      border-radius: 2.78vw;
      padding-top: 4.44vw;
      padding-left: 2.22vw;
      padding-right: 2.22vw;
      p {
        text-align: center;
      }
    }
  }
}
</style>