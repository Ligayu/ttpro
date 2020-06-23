<template>
  <div class="contain">
    <div class="logo">
      <span class="iconfont icon-longmao"></span>
    </div>
    <inputDom
      textType="text"
      eyeIconShow="0"
      placeholderText="请输入用户名/手机号"
      standard="^(\w{5,11}|\s?)$"
      @changeBorder="changeName"
      errorMsg="请输入正确用户名或手机号"
    ></inputDom>
    <!-- 创建了一个正则，是一个匹配字符串的规则 -->
    <inputDom
      textType="password"
      eyeIconShow="1"
      placeholderText="请输入密码"
      standard="^(\w{3,9}|\s?)$"
      @changeBorder="changePassword"
      errorMsg="请输入正确密码"
    ></inputDom>
    <clickBtn defVal="登录" @newClick="touchBtn"></clickBtn>
    <!-- 若是直接在父组件注册点击事件则没有用 -->
    <div class="toRegister">
      <span>
        没有账号？
        <router-link to="/Register" style="color:rgb(255, 103, 0);">注册</router-link>
      </span>
    </div>
    <!-- 过渡动画 -->
    <van-popup class="gif" v-model="show">
      <img src="@/assets/02.gif" alt />
    </van-popup>
  </div>
</template>

<script>
import inputDom from "@/components/inputDom.vue";
import clickBtn from "@/components/clickBtn.vue";

export default {
  data() {
    return {
      username: "",
      password: "",
      show: false
    };
  },
  components: {
    inputDom,
    clickBtn
  },
  methods: {
    changeName(data) {
      this.username = data;
    },
    changePassword(data) {
      this.password = data;
    },
    touchBtn() {
      console.log("触发了按钮");
      //输入值不能为空
      if (!this.username || !this.password) {
        this.$toast.fail("输入不能为空");
        return;
      }
      this.$axios({
        url: "http://127.0.0.1:3000/login",
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        const { message, data } = res.data;
        if (message === "登录成功") {
          // this.$toast.success(message);
          localStorage.setItem("userId", data.user.id);
          localStorage.setItem("token", data.token);

          //显示过渡动画
          this.show = true;
          setTimeout(() => {
            this.show = false;
            this.$router.push({ path: "/User" });
          }, 3000);
        } else {
          this.$toast.fail(message);
        }
      });
    }
  }
};
</script>

<style lang='less' scoped>
.contain {
  background-color: rgb(216, 237, 242);
  height: 168.89vw;
  padding: 19.44vw 8.33vw 0;
  .logo {
    text-align: center;
    .iconfont {
      font-size: 22.22vw;
      color: rgb(159, 156, 151);
    }
  }
  .toRegister {
    margin-top: 8.33vw;
    text-align: center;
  }
  .gif {
    width: 36.33vw;
    height: 28.33vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>