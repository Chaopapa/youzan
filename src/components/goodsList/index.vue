<template>
  <div class="goods-list">
      <GoodsList :category="item.category" v-for="(item,index) in categoryItemList" :key="index">
          <GoodsItem :item="value" v-for="(value,i) in item.itemList" :key="i">

          </GoodsItem>
      </GoodsList>
  </div>
</template>

<script>
import GoodsList from "./GoodsList";
import GoodsItem from "./GoodsItem";

export default {
    props:{
        bannerList:{
            type:Array
        },
        categoryItemList:{
            type:Array
        }
        
    },
    components:{
        GoodsList,
        GoodsItem
    }
}
</script>

<style>

</style>