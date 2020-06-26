<template>
  <div class="container">
    <div class="header">
      <div class="hd_logo">
        <i class="iconfont icon-longmao"></i>
      </div>
      <div class="hd_search">
        <inputDom class="clearStyle" placeholderText="搜索新闻" />
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="hd_user" @click="user">
        <i class="iconfont icon-wode"></i>
      </div>
    </div>

    <van-tabs v-model="active" swipeable class="hd_nav">
      <van-tab v-for="index in 8" :title="'选项 ' + index" :key="index">{{ 4 }}</van-tab>
    </van-tabs>

    <div class="content">
      <messageItem></messageItem>
      <messageItem></messageItem>
      <messageItem></messageItem>
    </div>
  </div>
</template>

<script>
import messageItem from "@/components/messageItem";
import inputDom from "@/components/inputDom";
export default {
  data() {
    return {
      active: "a"
    };
  },
  components: {
    messageItem,
    inputDom
  },
  methods: {
    user() {
      this.$router.push("/User");
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  background-color: rgb(216, 237, 242);

  .header {
    display: flex;
    padding-top: 2.22vw;
    background-color: rgb(255, 169, 41);
    height: 15.22vw;
    .hd_logo {
      width: 14.89vw;
      height: 12vw;
      line-height: 12vw;
      text-align: center;
      i {
        font-size: 8.44vw;
      }
    }
    .hd_search {
      position: relative;
      flex: 1;
      .clearStyle {
        margin: 0;
        border-radius: 6.22vw;
        overflow: hidden;
      }
      i {
        position: absolute;
        top: 3.78vw;
        left: 2.39vw;
      }
    }
    .hd_user {
      width: 16.89vw;
      height: 12vw;
      line-height: 12vw;
      text-align: center;
      margin-left: 4.11vw;
      i {
        font-size: 8.44vw;
      }
    }
  }

  //   .hd_nav {
  //     display: flex;
  //     margin-top: 2.22vw;
  //     background-color: white;
  //     border-radius: 16.67vw;
  //     ul {
  //       flex: 1;
  //       display: flex;
  //       padding: 3.33vw;
  //       li {
  //         margin-right: 4.33vw;
  //       }
  //     }
  //     i {
  //       padding: 4vw 6.33vw 0;
  //       color: #ccc;
  //     }
  //   };
}
</style>