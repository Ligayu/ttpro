<template>
  <div class="page">
    <div class="inputWrapper">
      <input :type="type" ref="input" />
      <i :class="type=='password'?closeEye:openEye" @click="changeType"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "password",
      closeEye: "iconfont icon-yanjing1 eyeIcon",
      openEye: "iconfont icon-yanjing eyeIcon",
    };
  },
  methods: {
    changeType() {
      this.type = this.type == "password" ? "text" : "password";
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }
  }
};
</script>

<style lang="less" scoped>
.page {
  padding: 24px;
  .inputWrapper {
    border: 1px solid #888;
    width: 300px;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    padding: 10px;
    input {
      flex: 1;
      border: none;
      outline: none;
      background-color: transparent;
    }
  }
  .eyeIcon {
    font-size: 4.33vw;
  }
}
</style>