<template>
  <div class="container">
    <backBar hd_title="我的收藏" @backBtn="back"></backBar>
    <messageItem
      v-for="(colletion,index) in collectionList"
      :key="index"
      :postData="colletion"
      comment="评论"
    ></messageItem>
    <div class="empty">
      <p v-if="listLength=='0'">
        <span>空空如也！</span>
        <i class="iconfont icon-kong-hezi"></i>
      </p>
    </div>
  </div>
</template>

<script>
import messageItem from "@/components/messageItem";
import backBar from "@/components/backBar";
export default {
  data() {
    return {
      listLength: "",
      collectionList: []
    };
  },
  components: {
    messageItem,
    backBar
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.$axios({
      url: "/user_star",
      method: "get"
    }).then(res => {
      console.log(res.data);
      if (res.data.data.length == 0) {
        this.listLength = 0;
      }
      this.collectionList = res.data.data;
    });
  }
};
</script>

<style lang="less">
.container {
  .empty {
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
}
</style>