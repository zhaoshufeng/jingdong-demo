import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default () => {
  const store = useStore()
  const { cartList } = store.state

  const route = useRoute()
  const shopId = route.params.id

  // 商品增加（减少）
  const handleCountClick = (shopId, productId, productItem, num) => {
    store.commit('changeCartList', { shopId, productId, productItem, num })
  }
  // 切换商品选中
  const changeProductItemClick = (shopId, productId) => {
    store.commit('changeProductItemChecked', { shopId, productId })
  }
  // 购物车总金额
  const total = computed(() => {
    const productList = cartList[shopId]?.productList
    const total = { price: 0, count: 0 }
    if (productList) {
      for (const key in productList) {
        total.price += productList[key].count * productList[key].currentPrice
        total.count += productList[key].count
      }
    }
    total.price = total.price.toFixed(2)
    return total
  })
  // 购物车总数量

  return { cartList, shopId, handleCountClick, changeProductItemClick, total }
}
