import Vue from "vue";
import Vuex from "vuex";
//vuex和vue-router在使用之前都必须进行use,使用use之后，所有的所有的vue实例都有了$store属性了。
Vue.use(Vuex); //$store

export default new Vuex.Store({
  state: {
    num: 0,
    LoginUser: null
  }, //全局的状态数据
  mutations: {
    //注意：：：突变要求必须是同步函数，不能是异步的。(纯函数，相同输入一定得到相同输出)
    addNum(state, payload) {
      //突变就是定义方法，第一个参数是state 第二个参数是载荷。
      state.num += payload;
    },
    LoginUser(state, user) {
      //突变就是定义方法，第一个参数是state 第二个参数是载荷。
      if (user) {
        state.LoginUser = user;
      }
    }
  }, //修改状态数据中的数据
  actions: {
    //这个属性可以接受异步的函数 其实和mutations函数的作用差不多。
    updateNumAsync(context, payload) {
      setTimeout(() => {
        context.commit("addNum", payload);
      }, 1000);
    }
  },
  getters: {
    getLoginUserName(state) {
      return state.LoginUser ? state.LoginUser.UserName : "未登录";
    }
  }
});
