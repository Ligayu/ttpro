<template>
  <div class="container">
    <backBar hd_title="我的回复" @backBtn="back"></backBar>
    <div class="replay_con">
      <replayBar v-for="(item,index) in commentsList " :key="index" :transComment="item"></replayBar>
    </div>
    <p v-if="listLength=='0'">
      <span>空空如也！</span>
      <i class="iconfont icon-kong-hezi"></i>
    </p>
  </div>
</template>

<script>
import replayBar from "@/components/replayBar.vue";
import backBar from "@/components/backBar.vue";
export default {
  data() {
    return {
      listLength: "",
      commentsList: []
    };
  },
  components: {
    replayBar,
    backBar
  },
  mounted() {
    this.$axios({
      url: "/user_comments",
      method: "get"
    }).then(res => {
      console.log(res);
      if (res.data.data.length == 0) {
        this.listLength = 0;
      }
      this.commentsList = res.data.data;
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  .replay_con {
    width: 94.56vw;
    margin: 4.44vw auto 0;
    border-radius: 4.67vw;
    overflow: hidden;
  }
  p {
    display: flex;
    margin: 34.67vw auto 0;
    font-size: 8vw;
    height: 64.67vw;
    width: 94.22vw;
    background-color: white;
    border-radius: 6.22vw;
    span {
      flex: 1;
      text-align: right;
      line-height: 64.67vw;
      padding-left: 12.56vw;
    }
    i {
      flex: 1;
      text-align: center;
      font-size: 20vw;
      line-height: 64.67vw;
    }
  }
}
</style>