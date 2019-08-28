export default {
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
}; //修改状态数据中的数据
