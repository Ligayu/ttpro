<template>
  <div class="container">
    <backBar hd_title="我的收藏" @backBtn="back"></backBar>
    <messageItem
      v-for="(colletion,index) in collectionList"
      :key="index"
      :postData="colletion"
      comment="评论"
    ></messageItem>
  </div>
</template>

<script>
import messageItem from "@/components/messageItem";
import backBar from "@/components/backBar";
export default {
  data() {
    return {
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
      this.collectionList = res.data.data;
    });
  }
};
</script>

<style lang="less">
</style>