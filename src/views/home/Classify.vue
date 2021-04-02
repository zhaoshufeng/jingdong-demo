<template>
  <div class="classify">
    <div class="classify__item" v-for="item in classifyList" :key="item.id">
      <img :src="item.imgUrl" alt="">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
const list = [
  {
    id: 1,
    imgUrl: require('../../assets/超市@2x.png'),
    title: '超市便利'
  },
  {
    id: 2,
    imgUrl: require('../../assets/超市@2x.png'),
    title: '超市便利'
  },
  {
    id: 3,
    imgUrl: require('../../assets/超市@2x.png'),
    title: '超市便利'
  },
  {
    id: 4,
    imgUrl: require('../../assets/超市@2x.png'),
    title: '超市便利'
  },
  {
    id: 5,
    imgUrl: require('../../assets/超市@2x.png'),
    title: '超市便利'
  },
  {
    id: 6,
    imgUrl: require('../../assets/超市@2x.png'),
    title: '超市便利'
  },
  {
    id: 7,
    imgUrl: require('../../assets/超市@2x.png'),
    title: '超市便利'
  },
  {
    id: 8,
    imgUrl: require('../../assets/超市@2x.png'),
    title: '超市便利'
  },
  {
    id: 9,
    imgUrl: require('../../assets/超市@2x.png'),
    title: '超市便利'
  },
  {
    id: 10,
    imgUrl: require('../../assets/超市@2x.png'),
    title: '超市便利'
  }
]
export default {
  setup () {
    const classifyList = reactive(list)
    return { classifyList }
  }
}
</script>

<style lang="scss" scoped>
.classify{
  display: flex;
  flex-wrap: wrap;
  &__item{
    width:20%;
    padding:.05rem;
    box-sizing: border-box;
    text-align: center;
    img{
      width:100%;
      transform: scale(0.8);
      transform-origin:center;
    }
  }
}
</style>>
