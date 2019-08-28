<template>
  <div id="app">
    <h1>vuex里面的num:{{ $store.state.num }} -----{{ myNum }}</h1>
    <h1>当前的登录用户是：{{ $store.getters.getLoginUserName }}</h1>
    <p>{{ getLoginUserName }}</p>
    <p @click="ChangeName(Date.now() + '')">{{ Uname }}</p>
    <p>{{ getUnameUpperCase }}</p>
    <hr />
    <input type="button" value="修改全局vuex内部的num +1" @click="addVuexNum" />
    <input
      type="button"
      value="修改全局vuex内部的num -1"
      @click="reduceVuexNum"
    />
    <div id="nav">
      <!-- 使用router-link标签来控制路由的跳转 这种方式可以多次点击跳转进入同一个url地址-->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link :to="userUrl">跳转到用户页面</router-link>
    </div>
    <hr />
    <!-- 使用行内js事件来控制路由跳转 因为每一个注册的路由都有一个$router对象 和 $route对象 -->
    <!-- 这种js控制的跳转路由的方式不能多次点击跳转进入同一个url地址 会被警告 -->
    <!-- 1.注册行内事件 -->
    <input
      type="button"
      value="跳转到用户页面"
      @click="$router.push('/user/6666')"
    />
    <!-- 2. url页面的对象化设置 -->
    <input
      type="button"
      value="跳转到用户页面2"
      @click="
        $router.push({
          name: 'user',
          params: {
            //url对象的设置中，这个属性不能和path属性一起用。
            id: 8888
          }
        })
      "
    />
    <!-- 3. 点击事件绑定函数方法 -->
    <input type="button" value="跳转到用户页面home" @click="navToHome" />
    <input type="button" value="后退一页" @click="backPage" />
    <hr />

    <!-- 路由匹配到的组件将显示在这里 匹配完路由需要这个标签来显示-->
    <transition name="rv-fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      userUrl: "/user/101010"
    };
  },
  computed: {
    //Vue的计算属性， 这个属性可以给Vue对象设置添加一些值属性，并且监控这些值的变化。这些值和直接添加到data的属性差不多。
    // ...mapState(["num", "LoginUser"]) //把vuex中的state状态映射到组件中的计算属性中。第一种写法
    ...mapState({
      //这个是store对象的state的映射
      //mapState()可以跟一个数组参数（数组参数默认是属性名和属性值是一样的es6简略写法），也可以跟一个对象参数，对象参数中，可以给要赋值的data起一个别名，也可以给这个要赋值的data赋值一个函数返回一个值。
      myNum: "num",
      user: state => state.LoginUser
    }),
    //这个是store对象的getters的映射
    ...mapGetters(["getLoginUserName"]),
    ...mapState("user", ["Uname"]),
    ...mapGetters("user", ["getUnameUpperCase"])
  },
  methods: {
    reduceVuexNum() {
      this.$store.commit("addNum", -1);
    },
    addVuexNum() {
      this.$store.commit("addNum", 1);
    },
    navToHome() {
      //前进到指定url网页的操作
      this.$router.push("home");
    },
    backPage() {
      //后退一页的操作。
      this.$router.go(-1);
    },
    ...mapMutations("user", ["ChangeName"]) //先找到Vuex的user模块，然后把这个模块的ChangeName方法写在这个vue对象的methods方法中。
  }
};
</script>

<style lang="scss">
.rv-fade-enter {
  opacity: 0;
  transform: translateY(-30px);
}
.rv-fade-enter-active {
  transition: all 1s linear;
}
.rv-fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.rv-fade-leave {
  opacity: 1;
  transform: translateY(30px);
}
.rv-fade-leave-active {
  transition: all 1s linear;
}
.rv-fade-leave-to {
  opacity: 0;
  transform: translateY(0px);
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
