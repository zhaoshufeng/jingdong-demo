<template>
  <div class="shopDetail">
    <div class="shopDetail__search">
      <span class="iconfont">&#xe677;</span>
      <div class="shopDetail__search__input">
        <span class="iconfont">&#xe610;</span>
        <input type="text" placeholder="请输入商品名称搜索">
      </div>
    </div>
    <div class="shopDetail__title">
      <ShopItem :shopItem="shopItem" />
    </div>
    <div class="shopDetail__content">
      <div class="shopDetail__content__left">
        <div :class="{'shopDetail__content__tab':true,'shopDetail__content__tab--active':curTab===item.key}" v-for="item in tabList" :key="item.id" @click="() => handleTabClick(item.key)">{{item.title}}</div>
      </div>
      <div class="shopDetail__content__right">
        <ProductItem v-for="item in productList" :key="item.id" :productItem="item"  :productItemId="item.id" />
      </div>
    </div>
   <ShopCart />
  </div>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue'
import ShopItem from '../../components/ShopItem'
import ProductItem from '../../components/ProductItem'
import ShopCart from './ShopCart'
const item = {
  id: 1,
  imgUrl: require('../../assets/鲜花@2x.png'),
  title: '沃尔玛',
  tags: ['月售1万+', '起送&yen;0', '基础运费&yen;5'],
  info: 'VIP尊享满89减4元运费券（每月3张）VIP尊享满89减4元运费券（每月3张）VIP尊享满89减4元运费券（每月3张）'
}
const leftList = [
  {
    id: 1,
    title: '全部商品',
    key: 'all'
  },
  {
    id: 2,
    title: '秒杀',
    key: 'miaosha'
  },
  {
    id: 3,
    title: '新鲜水果',
    key: 'shuiguo'
  },
  {
    id: 4,
    title: '休闲食品',
    key: 'xiuxian'
  },
  {
    id: 5,
    title: '时令蔬菜',
    key: 'shucai'
  }
]
const rightList = [
  {
    id: 'product1',
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg11.360buyimg.com%2Fn1%2Fjfs%2Ft9541%2F243%2F2329410452%2F490633%2F345f4f9a%2F59f43a9aNff72b7d5.jpg&refer=http%3A%2F%2Fimg11.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619839588&t=7f6e557833b4c610b3daf083ff828373',
    title: '车厘子1kg',
    sale: 10,
    currentPrice: 33.6,
    beforePrice: 33.6
  },
  {
    id: 'product2',
    imgUrl: 'https://img2.baidu.com/it/u=2578010453,3594529819&fm=26&fmt=auto&gp=0.jpg',
    title: '芒果2个/份',
    sale: 10,
    currentPrice: 33.6,
    beforePrice: 33.6
  },
  {
    id: 'product3',
    imgUrl: 'https://img2.baidu.com/it/u=260930154,3520995185&fm=26&fmt=auto&gp=0.jpg',
    title: '葡萄300g/份',
    sale: 10,
    currentPrice: 33.6,
    beforePrice: 33.6
  },
  {
    id: 'product4',
    imgUrl: 'https://img1.baidu.com/it/u=1566436481,2141927534&fm=26&fmt=auto&gp=0.jpg',
    title: '黄瓜250g/份',
    sale: 10,
    currentPrice: 33.6,
    beforePrice: 33.6
  },
  {
    id: 'product5',
    imgUrl: 'https://img0.baidu.com/it/u=3469544231,3832807583&fm=26&fmt=auto&gp=0.jpg',
    title: '山东红富士250g/份',
    sale: 10,
    currentPrice: 33.6,
    beforePrice: 33.6
  }
]

// tab相关逻辑
const useCurTabEffect = () => {
  const curTab = ref('all')
  // tab切换
  const handleTabClick = (key) => {
    curTab.value = key
  }
  // 请求产品列表
  const getProductList = (key) => {
    console.log(key)
  }
  watchEffect(() => {
    getProductList(curTab.value)
  })
  return { curTab, handleTabClick }
}
export default {
  components: {
    ShopItem,
    ProductItem,
    ShopCart
  },
  setup () {
    // 假数据
    const shopItem = reactive(item)
    const tabList = reactive(leftList)
    const productList = reactive(rightList)

    const { curTab, handleTabClick } = useCurTabEffect()

    return { shopItem, tabList, productList, curTab, handleTabClick }
  }
}
</script>

<style lang="scss" scoped>
.shopDetail{
  background:#fff;
  &__search{
    padding:.1rem;
    display: flex;
    align-items: center;
    line-height:.45rem;
    &__input{
      width:100%;
      margin-left:.2rem;
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
  }
  &__title{
    padding:.1rem;
  }
  &__content{
    position: absolute;
    left:0;
    right:0;
    top:1.76rem;
    bottom:.6rem;
    background: #fff;
    display: flex;
    overflow: hidden;
    &__left{
      width:.96rem;
      background:rgb(245,245,245);
      overflow-y: auto;
    }
    &__tab{
      line-height: .4rem;
      text-align: center;
      &--active{
background:#fff;
      }
    }
    &__right{
      width:100%;
      overflow: hidden;
      padding:0 .1rem;
      overflow-y: auto;
    }
  }
}
</style>
