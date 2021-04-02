import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {}// 购物车数据
  },
  mutations: {
    changeCartList (state, payload) {
      const { shopId, productId, productItem, num } = payload

      let shopInfo = state.cartList[shopId]
      if (!shopInfo) {
        shopInfo = {
          productList: {}
        }
      }
      let productInfo = shopInfo.productList[productId]
      if (!productInfo) {
        productInfo = { ...productItem, count: 0, checked: true }
      }
      productInfo.count += num
      shopInfo.productList[productId] = productInfo
      state.cartList[shopId] = shopInfo

      if (state.cartList[shopId].productList[productId].count < 0) {
        state.cartList[shopId].productList[productId].count = 0
      }
      console.log(state.cartList[shopId].productList[productId])
    },
    changeProductItemChecked (state, payload) {
      const { shopId, productId } = payload
      state.cartList[shopId].productList[productId].checked = !state.cartList[shopId].productList[productId].checked
    },
    changeAllChecked (state, payload) {
      const { shopId, allChecked } = payload
      const checked = !allChecked.value
      const productList = state.cartList[shopId].productList
      for (const key in productList) {
        productList[key].checked = checked
      }
      state.cartList[shopId].productList = productList
    },
    cleanCartList (state, payload) {
      const { shopId } = payload
      let productList = state.cartList[shopId].productList
      productList = {}
      state.cartList[shopId].productList = productList
    }
  },
  actions: {
  },
  modules: {
  }
})
