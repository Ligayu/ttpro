<template>
  <div class="container">
    <newsBar title="栏目管理" @backClick="back"></newsBar>
    <div class="manageCon">
      <div class="delete">
        <p>点击删除以下频道</p>
        <div class="deleCon">
          <span v-for="(item,index) in deleList" :key="item.id">
            {{item}}
            <i class="iconfont icon-guanbi" @click="deleCategory(index)"></i>
          </span>
        </div>
      </div>
      <div class="addition">
        <p>点击添加以下频道</p>
        <div class="addCon">
          <span
            @click="addCategory(index)"
            v-for="(item,index) in categoryList"
            :key="item.id"
          >{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newsBar from "@/components/newsBar";
export default {
  data() {
    return {
      categoryList: [],
      deleList: []
    };
  },
  components: {
    newsBar
  },
  mounted() {
    this.$axios({
      url: "/category",
      method: "get"
    }).then(res => {
      this.categoryList = res.data.data.filter(item => {
        return item.name != "" && item.name != "关注" && item.name != "头条";
      });
      console.log(this.categoryList);
    });
  },
  methods: {
    back() {
      this.$router.back();
    },
    deleCategory(data) {
      this.categoryList.push({ name: this.deleList[data] });
      this.deleList = this.deleList.filter((item, index) => {
        return index != data;
        console.log(this.deleList);
      });
      this.$toast.success("删除成功");
    },
    addCategory(data) {
      this.deleList.push(this.categoryList[data].name);
      this.categoryList = this.categoryList.filter(item => {
        return item.name != this.categoryList[data].name;
      });
      this.$toast.success("添加成功");
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  overflow: auto;
  background-color: rgb(216, 237, 242);
  .manageCon {
    background-color: white;
    width: 96vw;
    margin: 3.89vw auto;
    border-radius: 2.67vw;
    padding: 8.88vw 4.44vw;
    // overflow: auto;
    .delete {
      p {
        margin-bottom: 3.33vw;
        color: #ccc;
      }
      .deleCon {
        display: flex;
        margin-top: 3.61vw;
        flex-wrap: wrap;
        span {
          position: relative;
          border: 1px dotted khaki;
          margin: 2.33vw;
          padding: 2.44vw 0;
          width: 16vw;
          text-align: center;
          i {
            position: absolute;
            top: -1.66vw;
            right: -1.66vw;
            font-size: 3.33vw;
            color: rgb(199, 29, 35);
          }
        }
      }
    }
    .addition {
      p {
        margin: 8.66vw 0 5vw;
        color: #ccc;
      }
      .addCon {
        display: flex;
        margin-top: 3.61vw;
        flex-wrap: wrap;
        span {
          border: 1px dotted khaki;
          margin: 2.33vw;
          padding: 2.44vw 0;
          width: 16vw;
          text-align: center;
        }
      }
    }
  }
}
</style>