<template>
  <div id="order" class="page">
    <van-tabs v-model="active">
      <van-tab title="全部">内容 1</van-tab>
      <van-tab title="待付款">内容 2</van-tab>
      <van-tab title="待发货">内容 3</van-tab>
      <van-tab title="待收货">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab).use(Tabs);
export default {};
</script>

<style>
</style>