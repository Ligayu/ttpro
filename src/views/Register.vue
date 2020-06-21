<template>
  <div class="contain">
    <div class="logo">
      <span class="iconfont icon-longmao"></span>
    </div>
    <inputDom
      type="text"
      placeholderText="请输入用户名或手机号"
      standard="^(\w{5,11}|\s?)$"
      @changeBorder="changeName"
      errorMsg="请输入正确用户名或手机号"
    ></inputDom>
    <inputDom
      type="text"
      placeholderText="请输入昵称"
      standard="^(\w{3,9}|\s?)$"
      @changeBorder="changeNickname"
      errorMsg="请输入正确昵称"
    ></inputDom>
    <inputDom
      type="password"
      placeholderText="请输入密码"
      standard="^(\w{3,9}|\s?)$"
      @changeBorder="changePassword"
      errorMsg="请输入正确密码"
    ></inputDom>
    <clickBtn defVal="注册"></clickBtn>
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
      nickname: ""
    };
  },
  components: {
    //谨记要注册子组件
    inputDom,
    clickBtn
  },
  methods: {
    changeName(data) {
      this.username = data;
    },
    changePassword(data) {
      this.psaaword = data;
    },
    changeNickname(data) {
      this.nickname = data;
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