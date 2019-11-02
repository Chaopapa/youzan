<template>
  <div class="detail page">
    <div class="detail-wrap">
      <main>
        <van-swipe :height="375" indicator-color>
          <!-- itemDetail -->
          <van-swipe-item v-for="(item,index) in bannerList" :key="index" class="detail-swiper">
              <img :src="item" alt="">
          </van-swipe-item>
        </van-swipe>
        <div class="detail-normal">
            <h3>{{dataList.name}}</h3>
            <p class="price">￥{{dataList.retailPrice}}</p>
            <ul class="detail-normal-other">
                <li>
                  运费:免运费
                </li>
                <li>
                  剩余：183
                </li>
                <li>销量：14</li>
            </ul>
        </div>
        <div class="detail-main" v-html="html">

        </div>
      </main>
    </div>
    <footer class="detail-footer">立即购买</footer>
  </div>
</template>

<script>
import axios from "axios";
import { Swipe, SwipeItem } from "vant";
import Vue from "vue";
Vue.use(Swipe).use(SwipeItem);

export default {
  data() {
    return {
      dataList: {},
      bannerList: [],
      html:""
    };
  },
  methods: {
    requestGetData() {
      let _this = this;
      axios
        .get("/api/item/detail?id=3826035")
        .then(response => {
          const data = response.data.data;
          console.log(data);
          _this.dataList = data;
          _this.bannerList.push(data.itemDetail.picUrl1);
          _this.bannerList.push(data.itemDetail.picUrl2);
          _this.bannerList.push(data.itemDetail.picUrl3);
          _this.bannerList.push(data.itemDetail.picUrl4);
          _this.html = data.itemDetail.detailHtml;
        })
        .catch(err => {
          console.log("请求失败");
          console.log(err);
        });
    }
  },
  created() {
    this.requestGetData();
  }
};
</script>

<style >
.detail .detail-wrap {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 50px;
  overflow: auto;
}
.detail main {
  
}
.detail-footer {
  position: absolute;
  width: 100%;
  left: 0px;
  bottom: 0;
  height: 50px;
  background-color: rgba(245, 5, 61, 1);
  font-size: 16px;
  text-align: center;
  line-height: 50px;
  color: #fff;
}
.detail-swiper img{
    width: 100%;
    height: 100%;
}
.detail-normal{
    margin-top: 20px;
     padding:0 10px;
}
.detail-normal h3{
  
  font-size: 18px;
  font-weight: normal;
  line-height: 30px;
  color: #101010;
}
.detail-normal p{
  font-size: 18px;
  color:#F5053D;
  line-height: 22px;
 
}
.detail-normal-other{
  margin-top: 6px;
  height: 23px;
  display: flex;
}
.detail-normal-other li{
  flex: 1;
  line-height: 23px;
  font-size: 12px;
  color: #999;
}
.detail-normal-other li:nth-of-type(2){
  text-align: center;
}
.detail-normal-other li:nth-of-type(3){
  text-align: right;
}
.detail-main img{
  width: 100%;
}
</style>