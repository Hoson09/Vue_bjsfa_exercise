<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>vuex里面的num:{{ $store.state.num }}</h3>
    <demoabout @trans="handler"></demoabout>
    <hr />
    <input type="text" v-model="num" />
    <input type="button" value="异步action修改num" @click="asyncUpdateNum" />
    <input
      type="button"
      value="异步mapActions映射方式修改num"
      @click="updateNumAsync(Number(num))"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import DemoAbout from "../components/DemoAbout";
export default {
  data() {
    return {
      num: 1
    };
  },
  methods: {
    asyncUpdateNum() {
      //传递的数据默认都是字符串类型
      this.$store.dispatch("updateNumAsync", Number(this.num)); //action的触发方式
    },

    handler(e) {
      console.log(e);
    },
    ...mapActions(["updateNumAsync"])
  },
  components: {
    demoabout: DemoAbout
  }
};
</script>
