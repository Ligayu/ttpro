<template>
  <div class="follows">
    <div class="hd_follow">
      <img src alt />
      <div class="followTip">
        <p>天行者</p>
        <i>2019-10-10</i>
      </div>
      <span>回复</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.follows {
  height: 26.33vw;
  padding-top: 3.89vw;
  .hd_follow {
    display: flex;
    img {
      width: 16.67vw;
      height: 16.67vw;
      background-color: aquamarine;
      border-radius: 8.33vw;
    }
    .followTip {
      flex: 1;
      height: 16.67vw;
      padding-top: 3.78vw;
      margin-left: 2.78vw;
      font-size: 3.44vw;
      p {
        height: 5.56vw;
      }
      i {
        display: block;
        margin-top: 1.11vw;
        height: 4.78vw;
      }
    }
    span {
      margin-top: 3.89vw;
      margin-right: 1.67vw;
      font-size: 3.61vw;
    }
  }
}
</style>