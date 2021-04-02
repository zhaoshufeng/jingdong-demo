<template>
  <div class="shopItem">
    <div class="shopItem__left">
      <img :src="shopItem.imgUrl" alt="">
    </div>
    <div class="shopItem__right">
      <div class="shopItem__title">{{shopItem.title}}</div>
      <div class="shopItem__tags">
        <span v-for="innerItem in shopItem.tags" :key="innerItem">
          <span v-html="innerItem"></span>
        </span>
      </div>
      <div class="shopItem__info">{{shopItem.info}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopItem: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.shopItem{
  margin-bottom:.15rem;
  display: flex;
  &__left{
    width:.64rem;
    height:.64rem;
    margin-right:.1rem;
    img{
      width:100%;
    }
  }
  &__right{
    width:100%;
    overflow:hidden;
    border-bottom:1px solid #eee;
  }
  &__title{
    font-size:.14rem;
  }
  &__tags{
    margin:.1rem 0;
    span{
      margin-right: .05rem;
    }
  }
  &__info{
    color:red;
    @include ellipse;
    margin-bottom:.1rem;
  }
}
</style>
