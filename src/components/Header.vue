<template lang='pug'>
  header.header 
    .logo
      .logo-bg
         a(href='#')
           img.logo-img(src='../assets/img/logo.png')
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.header {
  width: 100%;
}

.logo-bg {
  width: 93px;
  height: 88px;
  background-color: #d72027;

  .logo-img {
    display: block;
    margin: 0 auto;
    padding-top: 32px;
  }
}
</style>
