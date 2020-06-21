<template>
  <div class="InputDom">
    <input
      :type="type"
      :placeholder="placeholderText"
      v-model="textInput"
      :class="{ 
      success:flag,
      error:!flag
      }"
    />
    <i class="iconfont icon-guanbi" ref="changStatus" @click="cleanText"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textInput: "",
      flag: true,
      Msg: ""
    };
  },
  props: ["placeholderText", "type", "standard", "errorMsg"],
  watch: {
    textInput(newVal) {
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
      this.$emit("changeBorder", newVal);
    }
  },
  methods: {
    cleanText() {
      this.textInput = "";
      this.$refs.changStatus.style = "display:none";
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
  i {
    position: absolute;
    top: 1.78vw;
    right: 1.78vw;
    display: none;
    color: red;
  }
  .error {
    border-bottom-color: red;
  }
  #error {
    display: block;
  }
}
</style>