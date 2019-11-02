<template>
  <div class="goods-list">
      <GoodsList :category="item.category" v-for="(item,index) in categoryItemList" :key="index">
          <GoodsItem  @click="detailAction(value.id)" :item="value" v-for="(value,i) in item.itemList" :key="i">

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
    },
    methods:{
        detailAction(id){
            console.log(id);
            this.$router.push(`/home/detail${id}`);
        }
    }
}
</script>

<style>

</style>