<template>
  <nav>
    <ul>
      <!-- <li>
        <router-link title="发现" to="/home">
          <van-icon size="22px" name="gem-o" />发现
        </router-link>
      </li>
      <li>
          <router-link title="订单" to="/order">
               <van-icon size="22px" name="balance-list-o" />订单
          </router-link>
      </li>
      <li>
          <router-link title="我的" to="/mine">
               <van-icon size="22px" name="user-o" />我的
          </router-link>
      </li>-->
      <li @click="tabAction(item.title)" v-for="item in list" :key="item.id">
        <router-link :to="item.url">
          <van-icon size="22px" :name="item.icon" />{{item.name}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);

export default {
  data() {
    return {
      list: [
        { id: "1", name: "发现", icon: "gem-o", url: "/home",title:"有赞精选" },
        { id: "2", name: "订单", icon: "balance-list-o", url: "/order",title:"我的订单" },
        { id: "3", name: "我的", icon: "user-o", url: "/mine",title:"账号信息" }
      ]
    };
  },
  methods:{
      tabAction(title){
          this.$center.$emit("tab",title);
      }
  }
};
</script>

<style  scoped>
nav {
  height: 45px;
  border-top: 1px solid #ccc;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
ul {
  width: 100%;
  height: 100%;
  display: flex;
}
ul li {
  flex: 1;
}
ul li a {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;
}
ul li a.router-link-active {
  color: #f5053d;
}
</style>