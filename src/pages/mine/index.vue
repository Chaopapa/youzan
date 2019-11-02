<template>
  <div id="mine" class="page">
    <van-cell-group class="mine-img" size="large">
      <van-cell title-class="mine-img-title" title="头像" >
        <van-icon  slot="right-icon" name="/people.png" size="40px" />
      </van-cell>
    </van-cell-group>

    <van-cell-group class="mine-info">
      <van-cell title="昵称" value="墨小刀" />
      <van-cell title="性别" value="女" />
      <van-cell is-link title="我的收货地址" />
    </van-cell-group>
    <van-cell-group class="mine-info">
      <van-cell is-link title="联系客服" />
    </van-cell-group>
    <van-cell-group class="mine-info">
      <van-cell is-link title="帮助中心" />
    </van-cell-group>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell, CellGroup } from "vant";
Vue.use(Cell).use(CellGroup);
export default {};
</script>

<style scoped>
.mine-info {
  margin-top: 20px;
}
.mine-img-title {
    line-height: 40px;
}
</style>