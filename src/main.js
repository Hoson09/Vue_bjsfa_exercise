import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";//把storejs文件在store的文件内进行了模块化分离了，所以可以丢掉这个引入了
import store from "./store/index";

Vue.config.productionTip = false;

new Vue({
  router, //这个是es6语法中的属性名的缩写。router:router 这也是4. 把配置好的router实例配置到Vue项目的根Vue实例的router选项上去。并且也让每个路由有了$router对象 和 $route对象
  store, //设置了当前的store之后，所有子的vue实例都可以通过$store拿到当前的store对象实例。
  render: h => h(App) //然后然后把App.vue文件渲染后根Vue实例上。
}).$mount("#app");
