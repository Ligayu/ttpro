<template>
  <div class="container" v-if="userInfo">
    <div class="header">
      <backBar hd_title="编辑资料" @backBtn="backClick"></backBar>
      <div class="headImg">
        <img :src="$axios.defaults.baseURL+userInfo.head_img" alt />
        <van-uploader :after-read="afterRead" class="uploaderImg" />
      </div>
    </div>
    <div class="content">
      <inputDom
        :placeholderText="userInfo.nickname"
        standard="^(.{3,9}|\s?)$"
        @changeText="changeName"
      ></inputDom>
      <inputDom
        :placeholderText="userInfo.password"
        standard="^(\w{3,9}|\s?)$"
        @changeText="changPassword"
      ></inputDom>
      <navBar v-if="userInfo.gender==1" itemBar="性别" barContent="男" @aSheet="changeGender"></navBar>
      <navBar v-else itemBar="性别" barContent="女" @aSheet="changeGender"></navBar>

      <!-- 上弹输入框的动画 -->
      <van-action-sheet
        v-model="actionSheet"
        :actions="actions"
        cancel-text="取消"
        description="性别"
        @select="onSelect"
        close-on-click-action
      />
    </div>
    <div class="footer">
      <clickBtn defVal="编辑" @newClick="edit"></clickBtn>
    </div>
    <!-- 过渡动画 -->
    <van-popup class="gif" v-model="show">
      <img src="@/assets/02.gif" alt />
    </van-popup>
  </div>
</template>

<script>
import backBar from "@/components/backBar.vue";
import navBar from "@/components/navBar.vue";
import clickBtn from "@/components/clickBtn.vue";
import inputDom from "@/components/inputDom.vue";
export default {
  data() {
    return {
      userInfo: null, //用户信息是对象，先存个空对象
      actionSheet: false,
      actions: [{ name: "男" }, { name: "女" }, { name: "不男不女" }],
      show: false //过渡动画预先不显示
    };
  },
  components: {
    backBar,
    navBar,
    clickBtn,
    inputDom
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
      console.log("trigger");

      this.$axios({
        url: "/user_update/" + localStorage.getItem("userId"),
        method: "post",
        data: {
          username: this.userInfo.username,
          password: this.userInfo.password,
          nickname: this.userInfo.nickname,
          gender: this.userInfo.gender,
          head_img: this.userInfo.head_img
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(res => {
        // this.$toast.success(res.data.message);
        //显示过渡动画
        this.show = true;
        setTimeout(() => {
          this.show = false;
          this.$router.push("/User");
        }, 3000);
      });
    },
    backClick() {
      //返回上一页
      this.$router.go(-1);
    },
    changeName(data) {
      this.userInfo.nickname = data;
      console.log(this.userInfo.nickname);
    },
    changPassword(data) {
      this.userInfo.password = data;
      console.log(this.userInfo.password);
    },
    changeGender() {
      this.actionSheet = true;
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      if (item.name == "男") this.userInfo.gender = 1;
      else this.userInfo.gender = 0;
    },
    afterRead(imgFile) {
      const data = new FormData();
      data.append("file", imgFile.file);
      this.$axios({
        url: "/upload",
        method: "post",
        // headers: {
        //   Authorization: localStorage.getItem("token")
        // },
        data: data
      }).then(res => {
        console.log(res);
        const { message, data } = res.data;
        if (message === "文件上传成功") {
          this.userInfo.head_img = data.url;
          console.log(this.userInfo.head_img);
        }
      });
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
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 2.22vw;
    }
    .uploaderImg {
      position: absolute;
      top: -4.17vw;
      left: -6.22vw;
      opacity: 0;
    }
  }
  .content {
    border-radius: 3.22vw;
    width: 84.33vw;
    margin: 16.78vw auto;
  }
}
</style>