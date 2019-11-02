<template>
  <div class="goodsItem">
      <div class="goodsItem-img">
          <img src="https://yanxuan-item.nosdn.127.net/98a65ae2cf4a9c4aa9e03d2661d377ee.png?imageView&quality=65&thumbnail=330x330" alt="">
      </div>
      <div class="goodsItem-content">
          <h3>日式暖水袋</h3>
          <div class="price">
              <span class="price-after">￥74</span>
              <span class="price-before">
                  <del>￥79</del>
              </span>
          </div>
          <div class="desc">
              狂欢特惠
          </div>
      </div>
  </div>
</template>

<script>
export default {

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
}
.goodsItem-img img{
    width: 172px;
    height: 172px;
}
.goodsItem .desc{
    color: #DD1A21;
    width: 60px;
    height: 15px;
    text-align: center;
    line-height: 15px;
    font-size: 12px;
    border: 1px solid #DD1A21;
    border-radius: .2rem;
    background: rgba(255,255,255,.9);
    margin-top: 6px;
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