<template>
  <div class="shop">
    <h3 class="shop__title">附近店铺</h3>
    <div class="shop__content">
      <ShopItem v-for="item in shopList" :Key="item.id" :shopItem="item" @click="() => handleClick(item.id)" />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import ShopItem from '../../components/ShopItem'
const list = [
  {
    id: 'shop1',
    imgUrl: require('../../assets/鲜花@2x.png'),
    title: '沃尔玛',
    tags: ['月售1万+', '起送&yen;0', '基础运费&yen;5'],
    info: 'VIP尊享满89减4元运费券（每月3张）VIP尊享满89减4元运费券（每月3张）VIP尊享满89减4元运费券（每月3张）'
  },
  {
    id: 'shop2',
    imgUrl: require('../../assets/鲜花@2x.png'),
    title: '沃尔玛',
    tags: ['月售1万+', '起送&yen;0', '基础运费&yen;5'],
    info: 'VIP尊享满89减4元运费券（每月3张）'
  },
  {
    id: 'shop3',
    imgUrl: require('../../assets/鲜花@2x.png'),
    title: '沃尔玛',
    tags: ['月售1万+', '起送&yen;0', '基础运费&yen;5'],
    info: 'VIP尊享满89减4元运费券（每月3张）'
  },
  {
    id: 'shop4',
    imgUrl: require('../../assets/鲜花@2x.png'),
    title: '沃尔玛',
    tags: ['月售1万+', '起送&yen;0', '基础运费&yen;5'],
    info: 'VIP尊享满89减4元运费券（每月3张）'
  },
  {
    id: 'shop5',
    imgUrl: require('../../assets/鲜花@2x.png'),
    title: '沃尔玛',
    tags: ['月售1万+', '起送&yen;0', '基础运费&yen;5'],
    info: 'VIP尊享满89减4元运费券（每月3张）'
  }
]
export default {
  components: {
    ShopItem
  },
  setup () {
    const router = useRouter()
    const shopList = reactive(list)
    const handleClick = (id) => {
      router.push(`/shopDetail/${id}`)
    }
    return { shopList, handleClick }
  }
}
</script>

<style lang="scss" scoped>
.shop{
  background:#fff;
  padding:.1rem;
  &__title{
    font-size:.14rem;
    font-weight: 550;
    margin-bottom:.15rem;
  }
}
</style>
