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
        <router-link to="/Register">注册</router-link>
      </span>
    </div>
  </div>
</template>

<script>
import inputDom from "@/components/inputDom.vue";
import clickBtn from "@/components/clickBtn.vue";

export default {
  data() {
    return {
      username: "",
      password: ""
      //   iconType: "password"
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
      console.log(this.username);
      console.log(this.password);
    }
  }
};
</script>

<style lang='less' scoped>
.contain {
  background-color: rgb(216, 237, 242);
  height: 138.89vw;
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
}
</style>