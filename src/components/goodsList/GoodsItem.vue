<template>
  <div class="goodsItem">
      <div class="goodsItem-img">
          <img :src="item.listPicUrl" alt="">
      </div>
      <div class="goodsItem-content">
          <h3>{{item.name}}</h3>
          <div class="price">
              <span class="price-after">￥{{item.retailPrice}}</span>
              <span class="price-before">
                  <del>￥{{item.counterPrice}}</del>
              </span>
          </div>
          <div v-for="(value,i) in item.itemTagList" :key="i" class="desc">
            {{value.name}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['item']
}
</script>

<style scoped>
.goodsItem{
    width: 172px;
    height: 271px;
}
.goodsItem-content h3{
    font-weight: normal;
    font-size: 14px;
    color:#333;
    margin-top: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.goodsItem-img img{
    width: 172px;
    height: 172px;
}
.goodsItem .desc{
    color: #DD1A21;
    padding: 0 3px;
    height: 15px;
    text-align: center;
    line-height: 15px;
    font-size: 12px;
    border: 1px solid #DD1A21;
    border-radius: .2rem;
    background: rgba(255,255,255,.9);
    margin-top: 6px;
    margin-right: 5px;
    float: left;
}
.price .price-after{
    font-size: 16px;
     color: #DD1A21;
}
.price .price-before{
    font-size: 12px;
    color: #999;
}
</style>