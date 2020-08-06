<template>
  <div class="container">
    <backBar @backBtn="back" />
    <div class="logo">
      <span class="iconfont icon-longmao"></span>
    </div>
    <inputDom
      textType="text"
      eyeIconShow="0"
      placeholderText="请输入用户名或手机号"
      standard="^(\w{5,11}|\s?)$"
      @changeText="changeName"
      errorMsg="请输入正确用户名或手机号"
    ></inputDom>
    <inputDom
      textType="text"
      eyeIconShow="0"
      placeholderText="请输入昵称"
      standard="^(.{3,9}|\s?)$"
      @changeText="changeNickname"
      errorMsg="请输入正确昵称"
    ></inputDom>
    <inputDom
      textType="password"
      eyeIconShow="1"
      placeholderText="请输入密码"
      standard="^(\w{3,9}|\s?)$"
      @changeText="changePassword"
      errorMsg="请输入正确密码"
    ></inputDom>
    <clickBtn defVal="注册" @newClick="touchBtn"></clickBtn>
    <!-- 过渡动画 -->
    <van-popup class="gif" v-model="show">
      <img src="@/assets/02.gif" alt />
    </van-popup>
  </div>
</template>

<script>
import inputDom from "@/components/inputDom.vue";
import clickBtn from "@/components/clickBtn.vue";
import backBar from "@/components/backBar.vue";
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
      show: false,
    };
  },
  components: {
    //谨记要注册子组件
    inputDom,
    clickBtn,
    backBar,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    changeName(data) {
      this.username = data;
    },
    changePassword(data) {
      this.password = data;
    },
    changeNickname(data) {
      this.nickname = data;
    },
    touchBtn() {
      console.log("触发了注册按钮");
      this.$axios({
        url: "/register",
        method: "post",
        data: {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        },
      })
        .then((res) => {
          if (res.data.message === "注册成功") {
            //显示过渡动画
            this.show = true;
            setTimeout(() => {
              this.show = false;
              this.$router.push("/login");
            }, 3000);
          }
          //错误信息已在main全局设置拦截器了
          else {
            this.$toast.fail(res.data.message);
          }
        })
        .catch((err) => {});
    },
  },
};
</script>

<style lang='less' scoped>
.container {
  background-color: rgb(216, 237, 242);
  height: 100%;
  padding: 0.44vw 8.33vw 0;
  .backBar {
    margin-bottom: 10vw;
  }
  .logo {
    text-align: center;
    .iconfont {
      font-size: 22.22vw;
      color: rgb(159, 156, 151);
    }
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