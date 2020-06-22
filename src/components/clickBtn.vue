<template>
  <div class="Btn">
    <button @click="clickBtn">{{defVal}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  props: ["defVal"],
  methods: {
    clickBtn() {
      this.$emit("newClick");
      console.log("从子组件传出去的点击事件");
    }
  }
};
</script>

<style lang='less' scoped>
.Btn {
  button {
    outline: none;
    color: white;
    height: 8.33vw;
    border: none;
    border-radius: 4.17vw;
    background-color: rgb(255, 103, 0);
    width: 100%;
  }
}
</style>