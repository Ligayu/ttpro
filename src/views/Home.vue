<template>
  <div class="container">
    <div class="indexImage">
      <img src="@/assets/03.jpg" alt />
    </div>
    <div class="content">
      <span>欢迎回来！</span>
    </div>
    <!-- <div class="link">
      <span>
        <button @click="showPopup">登录</button>
      </span>
      <span>
        <button>注册</button>
      </span>
    </div>-->
    <van-popup class="gif" v-model="show">
      <img src="@/assets/02.gif" alt />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  mounted() {
    // this.show = true;
    // setTimeout(() => {
    //   this.show = false;
    //   this.$router.replace("/index");
    // }, 3000);
    setTimeout(() => {
      this.$router.replace("/index");
    }, 3000);
  }
};
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  background-color: rgb(252, 252, 252);
  .indexImage {
    img {
      width: 100%;
    }
  }
  .content {
    text-align: center;
    color: rgb(117, 109, 109);
    //   text-shadow:  6px 6px 3px;
  }
  .link {
    display: flex;
    margin-top: 8.33vw;
    span {
      height: 10.56vw;
      color: rgb(202, 237, 242);
      text-align: center;
      flex: 1;
      button {
        height: 100%;
        border: none;
        background-color: rgb(252, 252, 252);
      }
    }
  }
}
</style>
