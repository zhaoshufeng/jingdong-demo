<template>
  <div class="tabBar">
    <router-link to="/home" active-class="tabBar--active">
      <i class="iconfont">&#xe9db;</i>
      <span>首页</span>
    </router-link>
    <router-link to="/cart" active-class="tabBar--active">
      <i class="iconfont">&#xe68d;</i>
      <span>购物车</span>
    </router-link>
    <router-link to="/order" active-class="tabBar--active">
      <i class="iconfont">&#xe60d;</i>
      <span>订单</span>
    </router-link>
    <router-link to="/my" active-class="tabBar--active">
      <i class="iconfont">&#xe658;</i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style lang="scss" scoped>
.tabBar{
  background:#fff;
  position: absolute;
  left:0;
  right:0;
  bottom:0;
  height:.5rem;
  border-top:1px solid #ddd;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a{
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size:.14rem;
    color:black;
    span{
      width:100%;
      text-align: center;
      margin-top:5px;
    }
  }
  &--active{
    color:blue !important;
  }
}
</style>>
