<template>
  <div>
    <router-link to="/login">login</router-link>
    <router-link to="/res">res</router-link>
    <router-link to="/acc">acc</router-link>
    <h3>{{msg}}</h3>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return { msg: "这是根组件" };
  }
};
</script>
<style lang="scss" scoped>
</style>