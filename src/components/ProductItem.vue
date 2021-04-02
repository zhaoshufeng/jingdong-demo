<template>
  <div class="productItem" v-show="!fromCart|| (fromCart&&productItem.count>0)">
    <span :class="{'iconfont':true,'productItem--checked':cartList[shopId]?.productList[productItem.id]?.checked}" v-if="fromCart" @click="() => changeProductItemClick(shopId,productItem.id)">{{cartList[shopId]?.productList[productItem.id]?.checked?'&#xe652;':'&#xe731;'}}</span>
    <div class="productItem__img">
      <img :src="productItem.imgUrl" alt="">
    </div>
    <div class="productItem__info">
      <div class="productItem__title">{{productItem.title}}</div>
      <div class="productItem__sale" v-if="!fromCart">月售{{productItem.sale}}件</div>
      <div class="productItem__price">
        <span>&yen;33.6</span>
        <span>&yen;33.6</span>
      </div>
      <div class="productItem__btns">
        <span class="iconfont" @click="() => handleCountClick(shopId,productItem.id,productItem,-1)">&#xe61e;</span>
        <span class="iconfont">{{cartList[shopId]?.productList[productItem.id]?.count||0}}</span>
        <span class="iconfont" @click="() => handleCountClick(shopId,productItem.id,productItem,1)">&#xe734;</span>
      </div>
    </div>
  </div>
</template>

<script>
import useCartEffect from '../effects/useCartEffect'
export default {
  props: {
    fromCart: {
      type: Boolean,
      default: false
    },
    productItem: {
      type: Object,
      default: () => {}
    }
  },
  setup (props, context) {
    const { cartList, shopId, handleCountClick, changeProductItemClick } = useCartEffect()
    return { cartList, shopId, handleCountClick, changeProductItemClick }
  }
}
</script>

<style lang="scss" scoped>
.productItem{
  display: flex;
  align-items: center;
  margin:.1rem 0;
  padding:.1rem 0;
  &--checked{
    color:blue;
  }
  &__img{
    width:.82rem;
    margin-right:.1rem;
    img{
      width:100%;
    }
  }
  &__info{
    position: relative;
    width:100%;
    overflow: hidden;
  }
  &__title{
    font-size:.14rem;
  }
  &__sale{
    margin:.1rem 0;
  }
  &__price{
    span{
      &:first-child{
        color:red;
        margin-right:.1rem;
        font-size:.14rem;
      }
      &:last-child{
        color:#ccc;
        text-decoration: line-through;
      }
    }
  }
  &__btns{
    position: absolute;
    right:0;
    bottom:0;
    span{
      &:nth-child(2){
        margin:0 .05rem;
      }
      &:last-child{
        color:blue;
      }
    }
  }
}
.productItem ~ .productItem{
  border-top:1px solid #eee;
}
</style>
