<template lang="pug">
  .login
    Menu
</template>

<script>
import Header from "./Header";
import Menu from "./Menu";

export default {
  name: "HomePage",
  components: {
    Header,
    Menu
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h1 {
  margin: 40px 0 0;
}
</style>
