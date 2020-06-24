<template>
  <div class="container" v-if="userInfo">
    <div class="header">
      <backBar hd_title="编辑资料"></backBar>
      <div class="headImg">
        <img :src="$axios.defaults.baseURL+userInfo.head_img" alt />
      </div>
    </div>
    <div class="content">
      <navBar itemBar="昵称" :barContent="userInfo.nickname"></navBar>
      <navBar itemBar="密码" barContent="*****"></navBar>
      <navBar v-if="userInfo.gender==1" itemBar="性别" barContent="男"></navBar>
      <navBar v-else itemBar="性别" barContent="女"></navBar>
    </div>
    <div class="footer">
      <clickBtn defVal="编辑" @click="edit"></clickBtn>
    </div>
  </div>
</template>

<script>
import backBar from "@/components/backBar.vue";
import navBar from "@/components/navBar.vue";
import clickBtn from "@/components/clickBtn.vue";

export default {
  data() {
    return {
      userInfo: null //用户信息是对象，先存个空对象
    };
  },
  components: {
    backBar,
    navBar,
    clickBtn
  },
  mounted() {
    const userId = localStorage.getItem("userId");
    this.$axios({
      url: "/user/" + userId,
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then(res => {
      console.log(res);
      const { data, message } = res.data;
      if (message == "获取成功") {
        this.userInfo = data;
      }
    });
  },
  methods: {
    edit() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  background-color: rgb(216, 237, 242);
  .headImg {
    height: 16.67vw;
    width: 16.67vw;
    margin: 8.33vw auto;

    img {
      width: 100%;
      height: 100%;
      border-radius: 2.22vw;
    }
  }
  .content {
    border-radius: 3.22vw;
    width: 93.33vw;
    margin: 8.78vw auto;
    overflow: hidden;
  }
}
</style>