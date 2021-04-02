module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/style/variables.scss";'
      }
    }
  }
}
