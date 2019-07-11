<template lang="pug">
  #app
    Header
    //- router-link(:to="{ name: 'search' }").link Home page
    //- router-link(:to="{ name: 'login' }").link Login

    //- router-link(:to="{ name: 'login' }" v-if="isLoggedIn" v-on:click.native="logout()" replace).link.logout Log out
    //- span(v-if="userName").username Hi, {{ userName }} 
    span(v-if="isLoggedIn").logout 
      a( v-on:click="logout") Logout 

    router-view
    
    //- router-view

    
</template>

<script>
import { mapGetters } from "vuex";

import "vue-select/dist/vue-select.css";
export default {
  name: "App",
  components: {},
  data() {
    return {
      // authenticated: false,
      // mockAccount: {
      //   email: "n",
      //   password: "111"
      // }
    };
  },
  mounted() {
    // if (!this.authenticated) {
    //   this.$router.replace({ name: "login" });
    // }
  },
  computed: {
    ...mapGetters(["authStatus", "isLoggedIn", "userName"])
  },
  methods: {
    // setAuthenticated(status) {
    //   this.authenticated = status;
    // },
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700&display=swap');

@font-face {
  font-family: 'Helvetica Neue Light';
  font-style: normal;
  font-weight: normal;
  src: local('Helvetica Neue Light'), url('~@/assets/fonts/HelveticaNeueLight.woff') format('woff');
}

@font-face {
  font-family: 'Helvetica Neue Medium';
  font-style: normal;
  font-weight: normal;
  src: local('Helvetica Neue Medium'), url('~@/assets/fonts/HelveticaNeueMedium.woff') format('woff');
}

@font-face {
  font-family: 'Helvetica Neue Bold';
  font-style: normal;
  font-weight: normal;
  src: local('Helvetica Neue Bold'), url('~@/assets/fonts/HelveticaNeueBold.woff') format('woff');
}

*, *::before, *::after {
  box-sizing: border-box;
}

html * {
  font-family: 'Helvetica Neue Medium', 'Roboto', sans-serif;
}

*::placeholder {
  font-weight: 100;
  opacity: 0.5;
}

body {
  margin: 0;
}

h1 {
  margin: 40px 0 0;
}

.errors {
  color: #d72027;
}

.error_br {
  border: 1px solid rgba(215, 32, 39, 1) !important;
}

.bold {
  font-weight: 500 !important;
}

.logout {
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  display: block;
  padding: 10px;
  border: 1px solid #ccc;

  &:hover {
    // text-decoration: underline;
    background-color: #eee;
  }
}

.VueCarousel-navigation-button {
  font-size: 20px;
  font-weight: 700;
}

.username {
  position: absolute;
  right: 5px;
  top: 75px;
  font-weight: bold;
}

#Search {
  .vs__actions {
    // fill: #ffffff;
    display: none;
  }

  .vs__search::placeholder, .vs__selected-options {
    font-size: 55px;
  }

  .vs__search {
  }

  .vs__search::placeholder, .vs__dropdown-toggle, .vs__selected-options {
    background: transparent;
    border: none;
    text-align: center;
    font-weight: 100;
    outline: none;
  }

  .vs__selected {
    font-weight: 100;
    padding: 0;
    padding-top: 15px;
    width: 100%;
    justify-content: center;
    margin: 0;
  }
}

#status {
  .vs__selected {
    color: #fff;
    // padding-left: 40px;
  }

  .vs__search::placeholder {
    color: #fff;
  }
}

#app {
  padding: 0 15px;
  color: #313131;
  font-size: 15px;
  font-weight: 300;
}

.container {
  padding: 30px 5px;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

.vdp-datepicker {
  padding-top: 15px;
  outline: none;
  border: none;
  background-color: transparent;
}

#departing, #returning {
  font-weight: 100;
  outline: none;
  border: none;
  display: block;
  width: auto;
  background-color: transparent;
  font-size: 56px;
  text-align: center;
  width: 200px;
}

.link {
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  color: #313131;
}

.router-link-active {
  color: green;
}

.VueCarousel-navigation-button {
  outline: none;
  font-size: 20px;
  font-weight: 700;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  padding: 5px 11px !important;
  vertical-align: middle;
  text-align: center;
}

.btn {
  width: 100%;
  padding: 1em 2.5em;
  margin-top: 15px;
  font-weight: 700;
  color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  background-color: #d72027;
  border-width: 0;
  font-size: 16px;
  line-height: 1em;
  letter-spacing: 0px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  appearance: none;

  &:hover {
    opacity: 0.9;
  }
}
</style>
