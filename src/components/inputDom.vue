<template>
  <div class="InputDom">
    <!-- 设置 Input type 的时候 input 重新渲染了, 然后就变成 blur ,因此可在type加多从父组件传过来的textType-->
    <!-- 当flag为true时，显示含有success类的css样式 -->
    <input
      :type="reciveType || textType"
      :placeholder="placeholderText"
      v-model="textInput"
      :class="{ 
      success:flag,
      error:!flag
      }"
      @blur="showTip"
      ref="input"
    />
    <!-- <i v-if="eyeIconShow==='1'" :class="eye?openEye:closeEye" @click="toggleIcon"></i> -->
    <i v-if="eyeIconShow==='1'" :class="reciveType=='text'?openEye:closeEye" @click="toggleIcon"></i>
    <i class="iconfont icon-guanbi" ref="changStatus" @click="cleanText"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textInput: "",
      flag: true,
      eye: "",
      closeEye: "iconfont icon-yanjing1 eyeIcon",
      openEye: "iconfont icon-yanjing eyeIcon",
      reciveType: ""
    };
  },
  // eyeIconShow是父组件传过来的，判断输入框眼睛字体图标是否显示
  props: ["placeholderText", "textType", "standard", "errorMsg", "eyeIconShow"],
  mounted() {
    this.reciveType = this.textType;
  },
  watch: {
    textInput(newVal) {
      //  this.reciveType = this.textType; 这行代码会使得当没输入密码时点击眼睛
      //在眼睛状态为睁开时输入，还是会显示***，而不是文本

      //当密码输入框为空时让文本类型为不可见
      // if (newVal === "") {
      //   this.toggleIcon();
      // }
      let regExp = new RegExp(this.standard);
      this.flag = regExp.test(newVal);

      //改变错误提示的红叉显示和隐藏
      if (!this.flag) {
        this.$refs.changStatus.style = "display:block";
      } else {
        this.$refs.changStatus.style = "display:none";
      }
      this.$emit("changeText", newVal); //创建一个事件并把输入框数据从子组件中传出去
    }
  },
  methods: {
    cleanText() {
      this.textInput = ""; //当输入框为空时，用/^(\w{5,11}|\s?)$/来匹配0个或1个空格，这样错误红叉才会消失
      this.$refs.changStatus.style = "display:none";
    },
    toggleIcon() {
      // this.textType = this.textType === "password" ? "text" : "password";
      //父组件更新，子组件中的prop值也会更新，但子组件不能修改由父组件传递过来的值
      //应当定义一个子组件自己的data，再进行修改
      this.reciveType = this.reciveType === "password" ? "text" : "password";
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
      // this.eye = !this.eye;
    },
    showTip() {
      if (!this.flag) {
        console.log("输入框失去焦点");
        this.$toast.fail(this.errorMsg);
      }
    }
  }
};
</script>

<style lang='less' scoped>
.InputDom {
  position: relative;
  margin: 9.33vw 0;
  input {
    font-size: 3.33vw;
    outline: none;
    width: 100%;
    height: 11vw;
    text-indent: 7.67vw;
    border: 1px solid white;
    border-radius: 1.67vw;
  }
  .icon-guanbi {
    position: absolute;
    top: 3.78vw;
    right: -6.78vw;
    display: none;
    color: red;
  }
  .eyeIcon {
    position: absolute;
    top: 3.78vw;
    right: 1.78vw;
    font-size: 4.33vw;
  }
  .error {
    border-color: red;
  }
}
</style>