<template lang="pug">
  #app
    router-link(:to="{ path: '/home'}").link Home page
    router-link(:to="{ path: '/login'}").link Login
    br
    router-view
</template>

<script>
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";

export default {
  name: "App",
  components: {
    LoginPage,
    HomePage
  }
};
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700&display=swap');

@font-face {
  font-family: 'Helvetica Neue Light';
  font-style: normal;
  font-weight: normal;
  src: local('Helvetica Neue Light'), url('./assets/fonts/HelveticaNeueLight.woff') format('woff');
}

@font-face {
  font-family: 'Helvetica Neue Medium';
  font-style: normal;
  font-weight: normal;
  src: local('Helvetica Neue Medium'), url('./assets/fonts/HelveticaNeueMedium.woff') format('woff');
}

@font-face {
  font-family: 'Helvetica Neue Bold';
  font-style: normal;
  font-weight: normal;
  src: local('Helvetica Neue Bold'), url('./assets/fonts/HelveticaNeueBold.woff') format('woff');
}

*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-family: 'Roboto', sans-serif;
}

h1 {
  margin: 40px 0 0;
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

.link {
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  color: #313131;
}

.router-link-active {
  color: green;
}

button {
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
