<template>
  <div>
    <h3>这是acc界面</h3>

    <router-link to="/acc/order">order</router-link>
    <router-link to="/acc/shopcar">shopcar</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
</style>