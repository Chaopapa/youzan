<template>
  <nav>
    <ul>
      <li>
        <a href>
          <van-icon size="22px" name="gem-o" />发现
        </a>
      </li>
      <li>
          <a href="">
               <van-icon size="22px" name="balance-list-o" />订单
          </a>
      </li>
      <li>
          <a href="">
               <van-icon size="22px" name="user-o" />我
          </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);

export default {};
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
</style>