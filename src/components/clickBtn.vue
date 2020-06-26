<template>
  <div class="Btn">
    <button @click="clickBtn">{{defVal}}</button>
  </div>
</template>

<script>
export default {
  props: ["defVal"],
  methods: {
    clickBtn() {
      this.$emit("newClick");
    }
  }
};
</script>

<style lang='less' scoped>
.Btn {
  margin: 22.33vw auto 13vw;
  width: 72.22vw;
  button {
    outline: none;
    color: white;
    height: 10.33vw;
    border: none;
    border-radius: 4.17vw;
    background-color: rgb(255, 103, 0);
    width: 100%;
  }
}
</style>