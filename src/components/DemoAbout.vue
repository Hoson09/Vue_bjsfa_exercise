<template>
  <div class="demoabout">
    <p @click="handleClick">点击我吧</p>
    <p @click="handleClick">点击我吧</p>
    <p @click="handleClick">点击我吧</p>
    <p @click="handleClick">点击我吧</p>
    <p @click="handleClick">点击我吧</p>
  </div>
</template>
<script>
export default {
  name: "demoabout",
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit("trans", 1);
    }
  }
};
</script>
<style scoped lang="scss"></style>
