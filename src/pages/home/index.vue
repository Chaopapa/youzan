<template>
  <div>
    <div class="page" id="home">
      <van-swipe :height="185" indicator-color>
        <van-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item.picUrl" />
        </van-swipe-item>
      </van-swipe>
      <goods-list :bannerList="bannerList" :categoryItemList="categoryItemList"></goods-list>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
import Vue from "vue";
import axios from "axios";
import GoodsList from "../../components/goodsList";
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      bannerList: [],
      categoryItemList: []
    };
  },
  components: {
    "goods-list": GoodsList
  },
  methods: {
    requestGetData() {
      let _this = this;
      axios
        .get("/api/home/catelist/itemlist?id=1043000")
        .then(response => {
          console.log(response);
          const data = response.data.data;
          console.log(data);
          _this.bannerList = data.currentCategory.bannerList;
          _this.categoryItemList = data.categoryItemList;
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

<style scoped>
#home .van-swipe img {
  width: 100%;
  height: 185px;
}
</style>