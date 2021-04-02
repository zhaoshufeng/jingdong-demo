<template>
  <div class="home">
    <div class="home__top">
      <div class="home__address">
        <span class="iconfont">&#xe6ab;</span>
        <span>北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层</span>
        <span class="iconfont">&#xe610;</span>
      </div>
      <div class="home__search">
        <span class="iconfont">&#xe610;</span>
        <input type="text" placeholder="山姆会员店优惠商品">
      </div>
      <div class="home__banner">
        <img src="../../assets/banner.jpeg" alt="">
      </div>
      <Classify />
    </div>
    <Shop />
  </div>
  <TabBar />
</template>

<script>
import Classify from './Classify'
import Shop from './Shop'
import TabBar from '../../components/TabBar'
export default {
  components: {
    Classify,
    Shop,
    TabBar
  }
}
</script>

<style lang="scss" scoped>
  .home{
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:.5rem;
    overflow-y: auto;
    &__top{
      background:#fff;
      margin-bottom:.1rem;
      padding:.22rem;
    }
    &__address{
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom:.1rem;
      padding-right:.2rem;
      span:first-child{
        margin-right: .1rem;
      }
      span:nth-child(2){
        @include ellipse;
      }
      span:last-child{
        position: absolute;
        right:0;
      }
    }
    &__search{
      background:rgb(245,245,245);
      border-radius: .25rem;
      line-height:.38rem;
      padding-left:.2rem;
      display: flex;
      align-items: center;
      margin-bottom:.1rem;
      color:#ccc;
      span{
        margin-right: .05rem;
      }
      input{
        border:none;
        outline: none;
        background: transparent;
        &::placeholder{
          color:#ccc;
        }
      }
    }
    &__banner{
      width:100%;
      height:1rem;
      border-radius:.2rem;
      overflow: hidden;
      margin-bottom:.1rem;
      img{
        width:100%;
      }
    }
  }
</style>
