<template lang="pug">
  .login
    Header
    .container
      h1 Sing Up
      LoginForm

</template>

<script>
import Header from "./Header";
import LoginForm from "./LoginForm";

export default {
  name: "LoginPage",
  components: {
    Header,
    LoginForm
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h1 {
  margin: 40px 0 0;
}
</style>
