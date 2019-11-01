<template>
  <div id="app">
      <Nav></Nav>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style>
/* 样式重置 */
body,html,ul,li,ol,dl,dt,dd,form,td,tr,p,span,h1,h2,h3,h4,h5,h6,a,img,input{
	margin:0;
	padding:0;
}
*{
    -webkit-tap-highlight-color: transparent;
}
body{
	font-size:12px;
    font-family: 微软雅黑;
}
img{
	border:0;
	vertical-align: top;
}

a{
	text-decoration:none;
    color: #333;
}

li{
    list-style: none;
}

.clearfix:after{
	content: ".";
    clear: both;
    display: block;
    overflow: hidden;
    visibility: hidden;
    height: 0;
    font-size: 1px;
}

html,body{
    width: 100%;
    height: 100%;

}

</style>
