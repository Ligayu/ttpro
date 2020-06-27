<template>
  <div class="container">
    <div class="header">
      <div class="hd_logo">
        <i class="iconfont icon-longmao"></i>
      </div>
      <div class="hd_search">
        <inputDom class="clearStyle" placeholderText="搜索新闻" />
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="hd_user" @click="user">
        <i class="iconfont icon-wode"></i>
      </div>
    </div>

    <van-tabs v-model="active" swipeable>
      <van-tab v-for="(item,index) in categoryList" :title="item.name" :key="index">
        <messageItem v-for="(item,index) in articleList" :key="index" :postData="item"></messageItem>
      </van-tab>
    </van-tabs>

    <div class="content"></div>
  </div>
</template>

<script>
import messageItem from "@/components/messageItem";
import inputDom from "@/components/inputDom";
export default {
  data() {
    return {
      active: 0,
      categoryList: [],
      articleList: []
    };
  },
  components: {
    messageItem,
    inputDom
  },
  mounted() {
    this.$axios({
      url: "/category",
      method: "get"
    }).then(res => {
      this.categoryList = res.data.data;
      this.getTabPosts();
    });
  },
  methods: {
    user() {
      this.$router.push("/User");
    },
    getTabPosts() {
      const categoryId = this.categoryList[this.active].id;
      this.$axios({
        url: "/post",
        method: "get",
        // 如果是 get 请求可以使用 params 的属性来带参数
        params: {
          category: categoryId
        }
      }).then(res => {
        const { data } = res.data;
        console.log(data);
        // 获取完了对应的文章列表数据,
        this.articleList = data;
      });
    }
  },
  watch: {
    active(newVal) {
      this.getTabPosts();
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  overflow: auto;
  background-color: rgb(216, 237, 242);

  .header {
    display: flex;
    padding-top: 2.22vw;
    // background-color: rgb(255, 169, 41);
    background-color: khaki;
    height: 15.22vw;
    .hd_logo {
      width: 14.89vw;
      height: 12vw;
      line-height: 12vw;
      text-align: center;
      i {
        font-size: 8.44vw;
      }
    }
    .hd_search {
      position: relative;
      flex: 1;
      .clearStyle {
        margin: 0;
        border-radius: 6.22vw;
        overflow: hidden;
      }
      i {
        position: absolute;
        top: 3.78vw;
        left: 2.39vw;
      }
    }
    .hd_user {
      width: 16.89vw;
      height: 12vw;
      line-height: 12vw;
      text-align: center;
      margin-left: 4.11vw;
      i {
        font-size: 8.44vw;
      }
    }
  }

  //   .hd_nav {
  //     display: flex;
  //     margin-top: 2.22vw;
  //     background-color: white;
  //     border-radius: 16.67vw;
  //     ul {
  //       flex: 1;
  //       display: flex;
  //       padding: 3.33vw;
  //       li {
  //         margin-right: 4.33vw;
  //       }
  //     }
  //     i {
  //       padding: 4vw 6.33vw 0;
  //       color: #ccc;
  //     }
  //   };
}
</style>