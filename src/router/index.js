import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

//构建路由表
const routes = [
    {
        path:'/',
        redirect:"/home"
    },
    {
      path:'/home',
      component:()=>import("../pages/home/index.vue"),
      children:[{
          path:"detail/:id",
          props:true,
          component:()=>import("../pages/home/detail.vue")
      }]
    },{
        path:"/order",
        component:()=>import("../pages/order")
    },{
        path:"/mine",
        component:()=>import("../pages/mine")
    }
];

//创建路由对象
const router = new Router({
  routes
});

export default router;
