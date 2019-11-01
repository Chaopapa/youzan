<template>
  <div class="goods-list">
      <GoodsList>
          <GoodsItem></GoodsItem>
          <GoodsItem></GoodsItem>
          <GoodsItem></GoodsItem>
          <GoodsItem></GoodsItem>
      </GoodsList>
  </div>
</template>

<script>
import GoodsList from "./GoodsList";
import GoodsItem from "./GoodsItem";

export default {
    components:{
        GoodsList,
        GoodsItem
    }
}
</script>

<style>

</style>