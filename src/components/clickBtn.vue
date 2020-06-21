<template>
  <div class="Btn">
    <button>{{defVal}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  props: ["defVal"]
  //   watch: {
  //     value(oldVal) {
  //       oldVal = this.defVal;
  //     }
  //   }
};
</script>

<style lang='less' scoped>
.Btn {
  button {
    color: white;
    height: 8.33vw;
    border: none;
    border-radius: 4.17vw;
    background-color: rgb(255, 103, 0);
    width: 100%;
  }
}
</style>