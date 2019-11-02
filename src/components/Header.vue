<template>
  <header>
    <van-nav-bar :title="title"  left-arrow>
      <van-icon size="20px" color="#101010" name="close" slot="left" />
      <van-icon size="20px" color="#101010" name="ellipsis" slot="right" />
    </van-nav-bar>
  </header>
</template>

<script>
import Vue from "vue";
import {NavBar,Icon} from "vant";
Vue.use(NavBar).use(Icon);

export default {
    data(){
        return {
            title:"有赞精选"
        }
    },
    created(){
       this.$center.$on('tab',(title)=>{
           this.title = title;
       }) 
    },
    
};
</script>

<style scoped>
header {
  position: absolute;
  width: 100%;
}
</style>