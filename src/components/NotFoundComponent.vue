<template lang='pug'>
  .notfound 
    Header
    .container
      h2 These aren't the droids you're looking for.
</template>

<script>
import Header from "./Header";

export default {
  name: "NotFoundComponent",
  components: {
    Header
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
