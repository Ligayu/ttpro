<template>
  <div class="container">
    <div class="article">
      <div class="art_hd">
        <newsBar></newsBar>
      </div>
      <div class="art_content">
        <div class="contentTitle">
          <h3>
            车主注意啦！9月下旬部分临时泊位进行
            清洁保养
          </h3>
          <div class="tips">
            <span>天行者</span>
            <i>2019-10-20</i>
          </div>
        </div>
        <div class="content">
          为营造临时泊位“干静、整洁、平安、有序”面貌迎国庆，
          市交通部门拟在9月下旬对部分城市道路临时泊位进行清洁保养，
          请市民群众配合在清洁保养期间将车辆驶离泊位。
          第一阶段临时泊位清洁保养计划（涉及17条路段）：
        </div>
        <div class="con_footer">
          <div class="btn">
            <i class="iconfont icon-zanpress"></i>
            <span>112</span>
          </div>
          <div class="btn btnLeft">已关注</div>
        </div>
      </div>
      <div class="follows_con">
        <p>精彩跟帖</p>
        <follows></follows>
        <follows></follows>
        <follows></follows>
      </div>
    </div>
  </div>
</template>

<script>
import newsBar from "@/components/newsBar";
import follows from "@/components/follows";
export default {
  components: {
    newsBar,
    follows
  }
};
</script>

<style lang="less" scoped>
.container {
  // background-color: rgb(216, 237, 242);
  height: 100%;
  .article {
    .art_content {
      height: 86.33vw;
      margin: 7.22vw 2.78vw 2.78vw;
      background-color: white;
      border-radius: 2.78vw;
      padding-top: 4.44vw;
      padding-left: 2.22vw;
      padding-right: 2.22vw;
      .tips {
        margin-top: 2.78vw;
        display: flex;
        color: #ccc;
        height: 6.44vw;
        line-height: 6.44vw;
        font-size: 3.89vw;
        i {
          margin-left: 4.44vw;
        }
      }
      .content {
        margin-top: 4.44vw;
        font-size: 4.3vw;
      }
      .con_footer {
        display: flex;
        margin: 11.11vw auto;
        .btn {
          border: 1px solid #ccc;
          margin-left: 11.11vw;
          background: white;
          border-radius: 3.33vw;
          height: 8.44vw;
          line-height: 8.44vw;
          text-align: center;
          width: 22vw;
        }
        .btnLeft {
          margin-left: 24.11vw;
        }
      }
    }
    .follows_con {
      height: 86.33vw;
      width: 94.22vw;
      margin: 4.22vw 2.78vw 2.78vw;
      background-color: white;
      border-radius: 2.78vw;
      padding-top: 4.44vw;
      padding-left: 2.22vw;
      padding-right: 2.22vw;
      p {
        text-align: center;
      }
    }
  }
}
</style>