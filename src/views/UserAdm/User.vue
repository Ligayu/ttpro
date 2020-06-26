<template>
  <div class="container">
    <div class="header" v-if="userInfo">
      <img class="imgBlur" :src="$axios.defaults.baseURL+userInfo.head_img" />
      <div class="hd_content">
        <div class="headImg">
          <img :src="$axios.defaults.baseURL+userInfo.head_img" />
          <!-- <img src="@/assets/06.jpg" /> -->
        </div>
        <div class="userName">
          <p>
            <i v-if="userInfo.gender==1" class="iconfont icon-xingbie man"></i>
            <i v-else class="iconfont icon-xingbie1 women"></i>
            {{userInfo.nickname}}
            <span>{{userInfo.create_date.split('T')[0]}}</span>
          </p>
        </div>
      </div>
      <i class="iconfont icon-shez setBtn" @click="edit"></i>
    </div>
    <div class="content">
      <navBar itemBar="我的关注" barContent="关注的用户"></navBar>
      <navBar itemBar="我的回复" barContent="回复"></navBar>
      <navBar itemBar="我的收藏" barContent="文章/视频"></navBar>
      <navBar itemBar="设置" barContent></navBar>
    </div>
    <div class="footer">
      <clickBtn defVal="退出登录" @newClick="quitLogin"></clickBtn>
    </div>

    <!-- 过渡动画 -->
    <van-popup class="gif" v-model="show">
      <img src="@/assets/02.gif" alt />
    </van-popup>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import clickBtn from "@/components/clickBtn.vue";
export default {
  data() {
    return {
      userInfo: null,
      show: false
    };
  },
  mounted() {
    let userId = localStorage.getItem("userId");
    this.$axios({
      url: "/user/" + userId, //设置了全局基地址之后，这里会自动拼接上设置的
      // headers: {
      //   Authorization: "Bearer " + localStorage.getItem("token")
      // },
      method: "get"
    }).then(res => {
      const { message, data } = res.data;
      if (message == "获取成功") {
        this.userInfo = data;
      } else {
        this.$toast.fail("获取失败");
        this.$router.push("/login");
      }
    });
  },
  components: {
    navBar,
    clickBtn
  },
  methods: {
    edit() {
      this.$router.push("/Edit");
    },
    quitLogin() {
      console.log("退出登录");
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      //显示过渡动画
      this.show = true;
      setTimeout(() => {
        this.show = false;
        this.$router.replace("/login");
      }, 3000);
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  background-color: rgb(216, 237, 242);
  height: 100%;
  //头部
  .header {
    position: relative;
    width: 100%;
    height: 58vw;
    .imgBlur {
      width: 100%;
      height: 100%;
      filter: blur(0.67vw);
      // z-index: -233;
    }
    .hd_content {
      position: absolute;
      display: flex;
      top: 36.33vw;
      left: 11.11vw;
      height: 18.67vw;
      width: 82.22vw;
      .headImg {
        width: 16.67vw;
        height: 16.67vw;
        img {
          width: 100%;
          height: 100%;
          border-radius: 2.67vw;
        }
      }
      .userName {
        flex: 1;
        text-align: right;
        margin-top: 3.33vw;
        overflow: hidden;
        font-size: 3.33vw;
        font-weight: 700;
        color: wheat;
        .man {
          color: skyblue;
        }
        .women {
          color: pink;
        }
        span {
          display: block;
          padding: 1.67vw;
        }
      }
    }
    .setBtn {
      position: absolute;
      right: 5.56vw;
      top: 5.56vw;
    }
  }
  //内容
  .content {
    border-radius: 3.22vw;
    width: 93.33vw;
    margin: 8.78vw auto;
    overflow: hidden;
  }
  // //过渡动画的样式
  // .gif {
  //   width: 36.33vw;
  //   height: 28.33vw;
  //   overflow: hidden;
  //   img {
  //     width: 100%;
  //     height: 100%;
  //   }
  // }
}
</style>