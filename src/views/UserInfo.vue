<template>
  <div class="userinfo">
    <h1>这是用户页面</h1>
    <!-- params代表是参数 id代表在route中设定的参数 -->
    <p>{{ $route.params.id }}</p>
    <!-- $router 代表的是router对象
    $route 代表是匹配的路由规则 -->

    <!-- 这个就是存放我们的组件的、 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "userinfo",
  data() {
    return {};
  },
  //路由进入组件之前，执行
  beforeRouteEnter(to, from, next) {
    console.log("组件内部的守卫 beforeRouteEnter to:", to);
    console.log("组件内部的守卫 beforeRouteEnter from:", from);
    //这个方法在组件初始化之前调用的，因此不能拿到组件的实例对象this，因为this还没有被创建。
    next();
  },
  //路由参数更新的时候执行
  beforeRouteUpdate(to, from, next) {
    console.log("组件内部的守卫 beforeRouteUpdate to:", to);
    console.log("组件内部的守卫 beforeRouteUpdate from:", from);
    //在route只是改变了后面跟的参数，这个组件被复用的时候调用这个方法。
    next();
  },
  //组件销毁的时候执行
  beforeRouteLeave(to, from, next) {
    console.log("组件内部的守卫 beforeRouteLeave to:", to);
    console.log("组件内部的守卫 beforeRouteLeave from:", from);
    //导航离开该组件的对应路由时调用。
    next();
  },
  beforeCreate() {
    console.log("=====> beforeCreate");
  },
  beforeUpdate() {
    console.log("=====> beforeUpdate");
  },
  updated() {
    console.log("====>updated");
  },
  beforeDestroy() {
    console.log("=====> beforeDestroy");
  },
  destroyed() {
    console.log("=====> destroyed");
  }
};
</script>
<style scoped lang="scss"></style>
