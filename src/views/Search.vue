<template>
  <div class="container">
    <div class="header">
      <div class="back">
        <i class="iconfont icon-tuichu" @click="back"></i>
      </div>
      <div class="hd_search">
        <inputDom
          class="clearStyle"
          placeholderText="搜索关键字"
          @changeText="Keyword"
          :transText="textIn"
        />
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="searchBtn" @click="toSearch">搜索</div>
    </div>
    <div class="content">
      <div class="search_con" v-if="searchList.length==0">
        <div class="history">
          <h3>历史搜索</h3>
          <div class="history_con">
            <span v-for="(item,index) in historyList" :key="index">{{item}}</span>
          </div>
        </div>
        <div class="Topsearch">
          <h3>热门搜索</h3>
          <div class="Topsearch_con">
            <p v-for="(item,index) in TopsearchList" :key="index">{{index+1}}.{{item}}</p>
            <!-- <p>2.特朗普为中国卧底实锤!!!</p>
            <p>3.中美两国同时在南海军演!!!</p>-->
          </div>
        </div>
      </div>
      <messageItem v-for="item in searchList" :key="item.id" :postData="item" comment="评论"></messageItem>
    </div>
  </div>
</template>

<script>
import inputDom from "@/components/inputDom";
import messageItem from "@/components/messageItem";

export default {
  data() {
    return {
      searchList: [],
      keyword: "",
      historyList: [],
      TopsearchList: [
        "中国牛逼",
        "特朗普为中国卧底实锤!!!",
        "中美两国同时在南海军演!!!"
      ]
    };
  },
  components: {
    inputDom,
    messageItem
  },
  mounted() {
    this.searchList = [];
    this.historyList = JSON.parse(localStorage.getItem("history"));
  },
  methods: {
    Keyword(newVal) {
      this.keyword = newVal;
    },
    toSearch() {
      if (!this.keyword) {
        this.$toast.fail("内容不能为空");
        return;
      }

      this.historyList.push(this.keyword);
      localStorage.setItem("history", JSON.stringify(this.historyList));

      this.$axios({
        url: "/post_search",
        method: "get",
        params: {
          keyword: this.keyword
        }
      }).then(res => {
        console.log(res.data);
        this.searchList = res.data.data;
      });
    },
    back() {
      this.$router.back();
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
    .back {
      width: 14.89vw;
      text-align: center;
      i {
        font-size: 9.44vw;
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
        top: 3.2vw;
        left: 2.39vw;
        font-size: 4vw;
      }
    }
    .searchBtn {
      width: 16.89vw;
      height: 12vw;
      line-height: 12vw;
      text-align: center;
      margin-left: 4.11vw;
      font-size: 4.44vw;
    }
  }

  .content {
    background-color: white;
    width: 96vw;
    margin: 3.89vw auto;
    border-radius: 2.67vw;
    height: 88%;
    .history {
      padding: 5.56vw 5.56vw 4.44vw;
      .history_con {
        display: flex;
        margin-top: 3.61vw;
        flex-wrap: wrap;
        span {
          margin: 0 2.33vw;
          padding: 4.44vw 0;
          width: 16vw;
          text-align: center;
        }
      }
    }
    .Topsearch {
      padding: 5.56vw 5.56vw 4.44vw;
      .Topsearch_con {
        // display: flex;
        margin-top: 3.61vw;
        flex-wrap: wrap;
      }
      p {
        // display: block;
        margin: 0 2.33vw;
        padding: 4.44vw 0;
        // width: 16vw;
        text-align: left;
      }
    }
  }
}
</style>