<template>
  <div class="container">
    <div class="header" v-if="userInfo">
      <div class="headImg">
        <img :src="'http://127.0.0.1:3000'+userInfo.head_img" />
        <!-- <img src="@/assets/06.jpg" /> -->
      </div>
      <div class="userName">
        <p>
          <i class="iconfont icon-xingbie"></i>
          {{userInfo.nickname}}
        </p>
        <span>{{userInfo.create_date}}</span>
      </div>
      <div class="more">
        <i class="iconfont icon-select2"></i>
      </div>
    </div>
    <div class="content">
      <navBar></navBar>
      <navBar></navBar>
      <navBar></navBar>
      <navBar></navBar>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
export default {
  data() {
    return {
      userInfo: null
    };
  },
  mounted() {
    let userId = localStorage.getItem("userId");
    console.log(userId);

    this.$axios({
      url: "http://127.0.0.1:3000/user/" + userId,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      method: "get"
    }).then(res => {
      console.log(res.data);
      const { message, data } = res.data;
      if (message == "获取成功") {
        this.userInfo = data;
        console.log(this.userInfo);
      } else {
        this.$toast.fail("获取失败");
      }
    });
  },
  components: {
    navBar
  }
};
</script>

<style lang="less" scoped>
.container {
  background-color: rgb(228, 228, 228);
  .header {
    padding: 11.11vw 2.78vw 11.11vw 8.33vw;
    display: flex;
    height: 26vw;
    background-color: rgb(242, 242, 242);
    .headImg {
      width: 16.67vw;
      height: 16.67vw;
      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
    .userName {
      flex: 1;
      height: 16.67vw;
      p {
        margin: 2.78vw 2.78vw;
        i {
          margin-right: 2.78vw;
          color: skyblue;
        }
      }
      span {
        margin-left: 2.78vw;
        color: seagreen;
      }
    }
    .more {
      height: 16.67vw;
      line-height: 16.67vw;
    }
  }
  .content {
    margin-top: 2.33vw;
  }
}
</style>