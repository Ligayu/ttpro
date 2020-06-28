<template>
  <div class="focusBar">
    <img :src="$axios.defaults.baseURL+transList.head_img" />
    <div class="fb_content">
      <p>{{transList.nickname}}</p>
      <span>{{transList.create_date.split('T')[0]}}</span>
    </div>
    <button v-if="isSub==true" @click="disSub">{{transFocus}}</button>
    <button class="Subcolor" v-else @click="Sub">关注</button>
  </div>
</template>

<script>
export default {
  props: ["transFocus", "isSub", "transList"],
  methods: {
    disSub() {
      this.$emit("changeSub");
    },
    Sub() {
      this.$emit("turnSub");
    }
  }
};
</script>

<style lang="less" scoped>
.focusBar {
  display: flex;
  padding: 7.56vw 5.56vw;
  height: 32.22vw;
  border-bottom: 1px solid rgb(225, 225, 225);
  background-color: white;
  width: 100%;
  img {
    width: 14.67vw;
    height: 14.67vw;
    border-radius: 8.33vw;
  }
  .fb_content {
    flex: 1;
    padding: 0.78vw 0 0 4.33vw;
    color: wheat;
    span {
      margin-top: 5px;
    }
  }
  button {
    height: 8.56vw;
    width: 24.33vw;
    border-radius: 5.22vw;
    font-size: 3.61vw;
    border: none;
    margin-top: 3.44vw;
    background-color: rgb(225, 225, 225);
  }
  .Subcolor {
    background-color: rgb(255, 103, 0);
  }
}
</style>