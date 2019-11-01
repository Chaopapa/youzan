import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

//构建路由表
const routes = [
    {
        path:"/home",
        components: ()=>import("")
    }
];

//创建路由对象
const router = new Router({
  routes
});

export default router;
