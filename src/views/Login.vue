<template>
  <div class="login">
    这是一个登陆界面
    <input type="button" value="登录" @click="Login" />
    <input
      type="button"
      value="调用映射方法登录"
      @click="LoginUser({ UserName: 'ssss' })"
    />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    Login() {
      this.$store.commit("LoginUser", {
        UserName: "huyi"
      });
    },
    ...mapMutations(["LoginUser"]) //突变的map映射
  }
};
</script>
<style scoped lang="scss"></style>
