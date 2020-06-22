<template>
  <div class="InputDom">
    <input
      :type="reciveType"
      :placeholder="placeholderText"
      v-model="textInput"
      :class="{ 
      success:flag,
      error:!flag
      }"
      @blur="showTip"
    />
    <i v-if="eyeIconShow==='1'" :class="eye?openEye:closeEye" @click="toggleIcon"></i>
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
  watch: {
    textInput(newVal) {
      //把父组件传过来的文本类型储存在子组件的数据里
      console.log(this.type);
      this.reciveType = this.textType;

      let regExp = new RegExp(this.standard);
      console.log(regExp);
      this.flag = regExp.test(newVal);
      console.log(newVal);
      console.log(this.flag);

      if (!this.flag) {
        console.log(this.errorMsg);
        this.$refs.changStatus.style = "display:block";
      } else {
        this.$refs.changStatus.style = "display:none";
      }
      this.$emit("changeBorder", newVal); //创建一个事件并把数据从子组件中传出去
    }
  },
  methods: {
    cleanText() {
      this.textInput = "";
      this.$refs.changStatus.style = "display:none";
    },
    toggleIcon() {
      // this.textType = this.textType === "password" ? "text" : "password";
      //父组件更新，子组件中的prop值也会更新，但子组件不能修改由父组件传递过来的值
      //应当定义一个子组件自己的data，再进行修改
      this.reciveType = this.reciveType === "password" ? "text" : "password";
      this.eye = !this.eye;
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
    outline: none;
    width: 100%;
    height: 6.56vw;
    text-indent: 2em;
    // border: none;
    border: 1px solid white;
  }
  .icon-guanbi {
    position: absolute;
    top: 1.78vw;
    right: -4.78vw;
    display: none;
    color: red;
  }
  .eyeIcon {
    position: absolute;
    top: 1.78vw;
    right: 1.78vw;
    font-size: 4.33vw;
    // display: none;
  }
  .error {
    border-color: red;
  }
  #error {
    display: block;
  }
}
</style>