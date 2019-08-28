export default {
  getLoginUserName(state) {
    return state.LoginUser ? state.LoginUser.UserName : "未登录";
  }
};
