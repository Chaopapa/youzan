<template>
  <div class="goodsList">
    <h4>{{category.name}}</h4>
    <p>{{category.frontDesc}}</p>
    <div class="goodsList-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    props:['category']
};
</script>

<style scoped>
.goodsList {
  margin-top: 10px;
  background: #fff;
  overflow: hidden;
}
.goodsList h4,
.goodsList p {
  text-align: center;
}
.goodsList h4 {
    color: #333;
    font-size: 16px;
    margin-top: 8px;
    font-weight: normal;
}
.goodsList p{
    color: #999;
    font-size: 12px;
    margin-top: 8px;
    margin-bottom: 10px;
}
.goodsList-content {
  padding: 0 12px;
  

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>