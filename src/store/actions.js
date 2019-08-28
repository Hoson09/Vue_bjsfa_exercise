export default {
  //这个属性可以接受异步的函数 其实和mutations函数的作用差不多。
  updateNumAsync(context, payload) {
    setTimeout(() => {
      context.commit("addNum", payload);
    }, 1000);
  }
};
