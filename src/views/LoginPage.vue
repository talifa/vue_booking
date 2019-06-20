<template lang="pug">
  .login
    .container
      h1 Sing Up
      LoginForm

</template>

<script>
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
export default {
  name: "LoginPage",
  components: {
    Header,
    LoginForm
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h1 {
  margin: 40px 0 0;
}
</style>
