<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  position: absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  margin:auto;
  background:rgb(244,244,244);
}
</style>
