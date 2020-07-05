<template>
  <div class="container">
    <div class="header">
      <div class="hd_logo">
        <i class="iconfont icon-longmao"></i>
      </div>
      <div class="hd_search" @click="$router.push('/Search')">
        <inputDom class="clearStyle" placeholderText="搜索新闻" />
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="hd_user" @click="user">
        <i class="iconfont icon-wode"></i>
      </div>
    </div>
    <div class="tansList">
      <van-tabs v-model="active" swipeable>
        <van-tab v-for="(category,index) in categoryList" :title="category.name" :key="index">
          <!-- **需要禁止页面挂载时组件自动获取数据** (因为和我们的 mounted 操作重复了) :immediate-check="false" -->
          <van-list
            v-model="category.loading"
            :finished="category.finished"
            finished-text="没有更多了"
            :immediate-check="false"
            @load="onLoad"
          >
            <!-- @load="onLoad"下拉触底时触发onload函数 -->
            <messageItem
              v-for="(item,index) in category.postList"
              :key="index"
              :postData="item"
              comment="评论"
            ></messageItem>
          </van-list>
        </van-tab>
      </van-tabs>
      <i class="iconfont icon-xiajianhao" @click="$router.push('/Categorymanage')"></i>
    </div>

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
      categoryList: []
    };
  },
  components: {
    messageItem,
    inputDom
  },
  mounted() {
    //获取文章栏目
    this.getCategories();
  },
  methods: {
    user() {
      this.$router.push("/User");
    },
    getCategories() {
      //获取文章栏目的函数
      this.$axios({
        url: "/category",
        method: "get"
      }).then(res => {
        //往得到的分类列表里加两个键值对，pageIndex pageSize
        const categoryCount = res.data.data.map(item => {
          return {
            ...item,
            //加载组件的数据
            loading: false, //为false时，表示非加载中，加载中，loading为true
            finished: false, //为false时，表示加载未完成
            pageIndex: 1,
            pageSize: 3,
            postList: []
          };
        });
        console.log(categoryCount);
        this.categoryList = categoryCount;
        this.getArticlePosts();
      });
    },
    onLoad() {
      console.log("加载下一页");
      const currentCategory = this.categoryList[this.active];
      currentCategory.pageIndex += 1;

      this.getArticlePosts(currentCategory);
    },
    getArticlePosts(data) {
      //获取文章内容函数
      const categoryId = this.categoryList[this.active].id;
      const currentCategory = this.categoryList[this.active]; //当前的栏目
      //onload和getArticlePosts中的currentCategory
      //对象使用的是引用赋值。当我们把一个对象赋值给一个新的变量时，赋的其实是该对象的在堆中的地址，
      //而不是堆中的数据。也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，
      //其实都是改变的存储空间的内容，因此，两个对象是联动的

      this.$axios({
        url: "/post",
        method: "get",
        // 如果是 get 请求可以使用 params 的属性来带参数
        params: {
          category: categoryId,
          pageIndex: currentCategory.pageIndex,
          pageSize: currentCategory.pageSize
        }
      }).then(res => {
        const { data } = res.data;
        // console.log(data);
        // 获取完了对应的文章列表数据,
        // this.articleList = data;
        currentCategory.postList = [...currentCategory.postList, ...data];
        console.log(currentCategory.postList);

        // 这里加载完了文章列表数据, 然后需要手动将当前栏目的加载状态改回 false 也就是没有正在加载
        // 这样子才能在下次拉到底的时候重新触发加载下一页
        currentCategory.loading = false;

        //判断获得的文章数是否已经少于本栏目规定一页要显示的文章数
        if (res.data.data.length < currentCategory.pageSize) {
          currentCategory.finished = true;
        }
      });
    }
  },
  watch: {
    active(newVal) {
      //如果点击的栏目的postList没有数据，即长度为0，则加载，否则不加载，因为已有
      if (this.categoryList[newVal].postList.length == 0)
        this.getArticlePosts();
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
        top: 3.2vw;
        left: 2.39vw;
        font-size: 4vw;
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
  .tansList {
    position: relative;
    i {
      position: absolute;
      top: 0;
      right: 0;
      width: 12vw;
      height: 12vw;
      line-height: 12vw;
      text-align: center;
      background-color: white;
    }
  }
}
</style>