<template lang='pug'>
  
  form().form
    
      //- div.form-group
      //-     input#name.form-control(type='text',  v-model='username')
      //-     label(for='username', v-bind:class="{ filled: username != '' }") Name 
      div.form-group
          input#email.form-control(type='text',  v-model='email')
          label(for='email', v-bind:class="{ filled: email != '' }") Email
      div.form-group
          input#password.form-control(type='password',v-model='password')
          label(for='password', v-bind:class="{ filled: password != '' }") Password 
      p.errors(v-if="errors.length")
        b(v-for="error in errors") {{ error }}
      

      button.btn(v-on:click.prevent="login()") Submit
      div(v-for="item in TODOS") {{item.name}}
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "LoginForm",
  data() {
    return {
      errors: [],
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["TODOS"])
    // Другие вычисляемые свойства
  },

  methods: {
    ...mapActions(["GET_TODO"]),

    login() {
      if (this.email !== "" && this.password !== "") {
        if (
          this.email === this.$parent.$parent.mockAccount.email &&
          this.password === this.$parent.$parent.mockAccount.password
        ) {
          // this.$parent.$parent.authenticated = true;
          this.$parent.$emit("authenticated", true);
          this.$router.replace({ name: "search" });
        } else {
          this.errors = [];
          this.errors.push("The username and / or password is incorrect");
          // e.preventDefault();
        }
      } else {
        this.errors = [];
        this.errors.push("A username and password must be present");
        // e.preventDefault();
      }
    }
  },
  mounted() {
    this.GET_TODO();
  }
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
