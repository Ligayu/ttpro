<template>
  <div class="parent">
    <parentComment
      @parentReply="circleReply"
      :parentData="parentData.parent"
      v-if="parentData.parent"
    ></parentComment>

    <div class="parent_content">
      <div class="ParentTip">
        <p>{{parentData.user.nickname}}</p>
        <i>{{parentData.create_date.split('T')[0]}}</i>
      </div>
      <div class="mainCon">
        <span>{{parentData.content}}</span>
        <i @click="parentReply">回复</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "parentComment",
  props: ["parentData"],
  methods: {
    parentReply() {
      this.$emit("parentReply", {
        parent_id: this.parentData.id,
        nickname: this.parentData.user.nickname
      });
    },
    circleReply(parentInfo) {
      this.$emit("parentReply", parentInfo);
    }
  }
};
</script>

<style lang="less" scoped>
.parent {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .parent_content {
    padding-top: 1.67vw;
    justify-content: space-between;
    // height: 19.22vw;
    width: 66.67vw;
    background-color: khaki;
    margin-bottom: 2.67vw;
    border-radius: 2.67vw;
    align-items: center;

    .ParentTip {
      margin-left: 1.67vw;
      font-size: 4vw;
      i {
        color: whitesmoke;
      }
    }
    .mainCon {
      display: flex;
      text-align: left;
      margin: 2.67vw 0;

      span {
        margin: 0 4vw;
        flex: 1;
      }
      i {
        font-style: normal;
        margin: 0 2.78vw;
        font-size: 3.61vw;
        color: #ccc;
      }
    }
  }
}
</style>