<template>
   <div class="shopCart">
    <div class="shopCart__mask" v-if="showShopCart" @click="handleCartClick"></div>
    <div class="shopCart__productList" v-if="showShopCart" @click.stop>
      <div class="shopCart__productList__content">
        <div class="shopCart__productList__title">
          <div class="shopCart__productList__left" @click="() => handleAllCheckedClick(shopId)">
            <span :class="{'iconfont':true,'shopCart__productList__all':allChecked}">{{allChecked?'&#xe652;':'&#xe731;'}}</span>
            <span>全选</span>
          </div>
          <div class="shopCart__productList__right" @click="handleCleanCacrClick">清空购物车</div>
        </div>
        <ProductItem :fromCart="true" v-for="(value,key) in cartList[shopId]?.productList" :key="key" :productItem="value" :productItemId="value.id" />
      </div>
    </div>
    <div class="shopCart__cashier">
      <div class="shopCart__cashier__img" @click="handleCartClick">
        <img src="../../assets/basket@2x.png" alt="">
        <span class="shopCart__cashier__icon">{{total.count}}</span>
      </div>
      <div class="shopCart__cashier__total">
        总计：<span>&yen;{{total.price}}</span>
      </div>
      <div class="shopCart__cashier__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import ProductItem from '../../components/ProductItem'
import useCartEffect from '../../effects/useCartEffect'
const useShowCartEffect = () => {
  const showShopCart = ref(false)
  const handleCartClick = () => {
    console.log('c')
    showShopCart.value = !showShopCart.value
  }
  return { showShopCart, handleCartClick }
}
const useAllCheckedEffect = (cartList, shopId) => {
  const store = useStore()
  const allChecked = computed(() => {
    const productList = cartList[shopId].productList
    let checkedNum = 0
    const productListLen = Object.keys(productList).length
    for (const key in productList) {
      if (productList[key].checked) {
        checkedNum += 1
      }
    }
    return checkedNum === productListLen && productListLen > 0
  })
  console.log(allChecked)
  const handleAllCheckedClick = () => {
    store.commit('changeAllChecked', { shopId, allChecked })
  }
  const handleCleanCacrClick = () => {
    store.commit('cleanCartList', { shopId })
  }

  return { allChecked, handleAllCheckedClick, handleCleanCacrClick }
}
export default {
  components: {
    ProductItem
  },
  setup () {
    const { cartList, shopId, total } = useCartEffect()
    const { showShopCart, handleCartClick } = useShowCartEffect()
    const { allChecked, handleAllCheckedClick, handleCleanCacrClick } = useAllCheckedEffect(cartList, shopId)

    return { cartList, shopId, total, showShopCart, handleCartClick, allChecked, handleAllCheckedClick, handleCleanCacrClick }
  }

}
</script>

<style lang="scss" scoped>
.shopCart{
  &__mask{
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background:rgba(0,0,0,.4);
    z-index:1;
  }
  &__productList{
    position: absolute;
    left:0;
    right:0;
    bottom:.62rem;
    z-index:2;
    &__content{
      position: absolute;
      left:0;
      right:0;
      bottom:0;
      background:#fff;
      padding:.1rem .1rem 0;
    }
    &__all{
      color:blue;
    }
    &__title{
      height: .6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size:.14rem;
      border-bottom:1px solid #eee;
    }
    &__left{
      display: flex;
      align-items: center;
    }
  }
  &__cashier{
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    z-index:2;
    border-top:1px solid #eee;
    height:.62rem;
    box-sizing: border-box;
    background:#fff;
    display: flex;
    align-items: center;
    &__img{
      position: relative;
      margin-left:.32rem;
      width:.35rem;
      img{
        width:100%;
      }
    }
    &__icon{
      position: absolute;
      top:0;
      right:-0.1rem;
      width:.2rem;
      height:.2rem;
      line-height:.2rem;
      text-align: center;
      background:red;
      color:#fff;
      border-radius: 100%;
      transform-origin: left top;
      transform:scale(.5);
    }
    &__total{
      margin-left:.4rem;
      span{
        color:red;
        font-size:.16rem;
        font-weight: 550;
      }
    }
    &__btn{
      position: absolute;
      right:-.1rem;
      top:0;
      bottom:-.1rem;
      width:.75rem;
      line-height:.62rem;
      text-align: center;
      background:blue;
      color:#fff;
    }
  }
}
</style>
