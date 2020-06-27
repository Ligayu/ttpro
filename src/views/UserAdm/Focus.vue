<template>
  <div class="container">
    <backBar hd_title="我的关注" @backBtn="backClick"></backBar>
    <div class="fc_content">
      <focusBar
        v-for="(item,index) in focusList"
        :key="index"
        :name="item.nickname"
        :date="item.create_date"
        :hd_img="item.head_img"
        @changeSub="userSub(item.id)"
        :transFocus="focus"
      ></focusBar>
    </div>
    <p v-if="listLength=='0'">
      <span>空空如也！</span>
      <i class="iconfont icon-kong-hezi"></i>
    </p>
    <!-- 过渡动画 -->
    <van-popup class="gif" v-model="show">
      <img src="@/assets/02.gif" alt />
    </van-popup>
  </div>
</template>

<script>
import backBar from "@/components/backBar";
import focusBar from "@/components/focusBar";
export default {
  data() {
    return {
      focusList: [],
      focus: "取消关注",
      show: false,
      listLength: ""
    };
  },
  components: {
    backBar,
    focusBar
  },
  created() {
    this.$axios({
      url: "/user_follows",
      method: "get"
    }).then(res => {
      this.focusList = res.data.data;
      console.log(this.focusList);
      if (res.data.data.length == 0) {
        this.listLength = 0;
        console.log(this.listLength);
      }
    });
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    },
    userSub(data) {
      this.$axios({
        url: "/user_unfollow/" + data,
        method: "get"
      }).then(res => {
        if (res.data.message == "取消关注成功") {
          //显示过渡动画
          this.show = true;
          setTimeout(() => {
            this.show = false;
            location.reload();
          }, 2000);
        }
      });
    }
  },
  watch: {
    listLength(newVal) {
      console.log(newVal);
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  background-color: rgb(216, 237, 242);
  height: 100%;
  .fc_content {
    margin: 6.67vw auto;
    width: 94.22vw;
    border-radius: 6.22vw;
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