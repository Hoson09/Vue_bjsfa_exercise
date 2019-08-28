import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import User from "./user/index";

//vuex和vue-router在使用之前都必须进行use,使用use之后，所有的所有的vue实例都有了$store属性了。
Vue.use(Vuex); //$store

export default new Vuex.Store({
  state, //全局的状态数据
  mutations, //这相当于一个set方法，执行后，可以通知所有绑定的dom元素(监听者)进行对自己的dom元素上相应的属性进行修改。
  actions, //作用与mutations大致相当。
  getters, //对state中数据的一些修改和重置，只有调用这个方法才会产生作用。
  modules: {
    //引入各个部分自己定义的vuex模块文件。
    user: User
  }
});
