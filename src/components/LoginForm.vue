<template lang='pug'>
  form(method='POST' action='/register').form
      //- div.form-group
      //-     input#name.form-control(type='text',  v-model='username')
      //-     label(for='username', v-bind:class="{ filled: username != '' }") Name 
      div.form-group
          input#email.form-control(type='email',  v-model='email')
          label(for='email', v-bind:class="{ filled: email != '' }") Email
      div.form-group
          input#password.form-control(type='password',v-model='password')
          label(for='password', v-bind:class="{ filled: password != '' }") Password 
      button.btn.btn-primary(type='submit') Submit
</template>

<script>
export default {
  name: "LoginForm",
  data: () => ({
    username: "",
    email: "",
    password: ""
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.form-group {
  position: relative;
  margin-top: 2.0625rem;
  height: 4rem;

  input {
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    caret-color: #4a4a4a;
    outline: none;

    &:focus {
      & + label {
        top: 0.375rem;
        font-size: 0.625rem;
      }
    }
  }

  label.filled {
    top: 0.375rem;
    font-size: 0.625rem;
  }

  label {
    position: absolute;
    color: #9b9b9b;
    top: 1.5rem;
    left: 1rem;
    height: 1rem;
    transition: all 0.25s ease-in-out;
  }
}
</style>
