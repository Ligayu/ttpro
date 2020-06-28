<template>
  <div class="container">
    <backBar hd_title="我的关注" @backBtn="backClick"></backBar>
    <div class="fc_content">
      <focusBar
        v-for="(item,index) in focusList"
        :transList="item"
        :key="index"
        @changeSub="unSub(item.id,index)"
        :transFocus="focus"
        :isSub="item.isSub"
        @turnSub="Sub(item.id,index)"
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
      //实现取消关注时显示关注按钮
      const remakeList = res.data.data.map(item => {
        return {
          ...item,
          isSub: true
        };
      });
      console.log(remakeList);
      //实现关注人数为0时，显示“空空如也！”
      this.focusList = remakeList;
      if (remakeList.length == 0) {
        this.listLength = 0;
      }
    });
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    },
    unSub(data, index) {
      this.$axios({
        url: "/user_unfollow/" + data,
        method: "get"
      }).then(res => {
        this.focusList[index].isSub = false;
        this.$toast.success(res.data.message);
        // if (res.data.message == "取消关注成功") {
        //   //显示过渡动画
        //   this.show = true;
        //   setTimeout(() => {
        //     this.show = false;
        //     location.reload();
        //   }, 2000);
        // }
      });
    },
    Sub(id, index) {
      this.$axios({
        url: "/user_follows/" + id,
        method: "get"
      }).then(res => {
        if (res.data.message == "关注成功") {
          this.focusList[index].isSub = true;
          this.$toast.success(res.data.message);
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