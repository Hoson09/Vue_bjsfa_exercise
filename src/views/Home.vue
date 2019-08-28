<template>
  <div class="home">
    <h1>home页面</h1>
    <div class="left">
      <router-view></router-view>
    </div>
    <div class="right">
      <router-view name="right"></router-view>
    </div>
    <div class="bottom">
      <router-view name="bottom"></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left {
  float: left;
  width: 200px;
  background-color: #098;
  height: 300px;
}
.bottom {
  clear: both;
  height: 100px;
  background-color: blue;
}
.right {
  margin-left: 200px;
  background-color: #cc0;
}
</style>
