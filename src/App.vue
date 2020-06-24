<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>


<style lang="less">
@import url("http://at.alicdn.com/t/font_1897341_q0g66g4svs8.css");

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
#app {
  height: 174.17vw;
}
</style>
