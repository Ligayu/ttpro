<template>
  <div class="container">
    <newsBar @backClick="back"></newsBar>
    <div class="more_content">
      <p>精彩跟帖</p>
      <follows v-for="item  in transComments" :key="item.id" :commentData="item"></follows>
    </div>
  </div>
</template>

<script>
import follows from "@/components/follows";
import newsBar from "@/components/newsBar";
export default {
  data() {
    return {
      transComments: []
    };
  },
  components: {
    follows,
    newsBar
  },
  mounted() {
    //渲染评论内容
    this.$axios({
      url: "/post_comment/" + this.$route.params.id,
      method: "get"
    }).then(res => {
      console.log(res.data);

      this.transComments = res.data.data;
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
  .more_content {
    width: 94.22vw;
    margin: 4.22vw 2.78vw 2.78vw;
    background-color: white;
    border-radius: 2.78vw;
    padding: 4.44vw 2.22vw 2.22vw;
    overflow: auto;
    p {
      text-align: center;
    }
  }
}
</style>