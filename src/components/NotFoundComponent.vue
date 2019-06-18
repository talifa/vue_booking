<template lang='pug'>
  .notfound 
    Menu
    center.container
      img(src='http://pixelartmaker.com/art/6f2e7843902ca0a.png' width=200)
      h2 This is not the page you're looking for.
</template>

<script>
import Header from "./Header";
import Menu from "./Menu";

export default {
  name: "NotFoundComponent",
  components: {
    Header,
    Menu
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
