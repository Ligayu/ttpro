<template>
  <div id="app">
    <span class="iconfont icon-new"></span> 牛逼
    <router-view />
  </div>
</template>


export default {};

<style lang="less">
@import url("http://at.alicdn.com/t/font_1897341_j53rs49i78.css");

.icon-new {
  font-size: 120px;
  color: aquamarine;
}

//清除默认样式
* {
  margin: 0;
  padding: 0;
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
</style>
