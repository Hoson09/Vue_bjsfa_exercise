export default {
  //写一个单独模块的vuex
  state: {
    Uname: "app user name"
  },
  mutations: {
    ChangeName(state, payload) {
      state.Uname = payload;
    }
  },
  getters: {
    getUnameUpperCase(state) {
      return state.Uname.toUpperCase();
    }
  },
  namespaced: true //如果要让这个单独模块的vuex和其他模块隔离开来，那么就要把这个属性改写为true即可，这样模块与模块之间就通过命名空间隔离开来了。
  //如果不设置为true的话，默认store设置这些属性为全局的属性，就不能通过命名空间来查找了。
};
