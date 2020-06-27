<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>


<style lang="less">
@import url("http://at.alicdn.com/t/font_1897341_xyahtd4c04.css");
@import url("./commonLess/transition.less");
// @import url("@/css/transition.css");
//清除默认样式
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: inherit;
}

a:hover {
  text-decoration: none;
}

ul,
li,
ol {
  list-style: none;
}
#app {
  height: 192vw;
  overflow: auto;
  background-color: rgb(216, 237, 242);
}
</style>
