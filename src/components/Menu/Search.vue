<template lang="pug">
  #Search
    Header
    Menu
    .container 
      form(method='POST' action='/register').form
          .fieldset
            div.form-group
                label(for='from', v-bind:class="{ filled: from != '' }") From 
                input#from.form-control(type='text', placeholder='WTF' v-model='from')
                span Trivandrum
            a.switcher 
              
              
            div.form-group
                label(for='to', v-bind:class="{ filled: to != '' }") To
                input#to.form-control(type='text',  placeholder='WTF' v-model='to')
                span Moscow

          .fieldset
            div.form-group
                label(for='departing', v-bind:class="{ filled: departing != '' }") departing 
                input#departing.form-control(type='text', placeholder='10/02'  v-model='departing')
                span Saturday, 2018
            
            div.form-group
                label(for='returning', v-bind:class="{ filled: returning != '' }") returning
                input#returning.form-control(type='text',  placeholder='10/02'  v-model='returning')
                span Saturday, 2018

          .fieldset
            div.form-group
                label(for='passengers', v-bind:class="{ filled: passengers != '' }") passengers 
                input#passengers.form-control(type='number',  placeholder='3'  v-model='passengers')
                span 3 Adults
            div.form-group.--blue
                label(for='class', v-bind:class="{ filled: status != '' }") class
                input#status.form-control(type='text',  placeholder='BC'  v-model='status')
                span Business Class
          button.btn.btn-primary(type='submit') Search Flights


</template>

<script>
import Header from "../Header";
import Menu from "../Menu";

export default {
  name: "Search",
  components: {
    Header,
    Menu
  },
  data: () => ({
    from: "",
    to: "",
    departing: "",
    returning: "",
    passengers: "",
    status: ""
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.switcher {
  display: block;
  width: 15px;
  height: 15px;
  background-image: url('./assets/img/switch.svg');
  // background-size: contain;
  background-repeat: no-repeat;
}

form {
  display: flex;
  flex-direction: column;
}

.fieldset {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .form-group {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
    border: none;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    border-radius: 10px;
    color: #313131;

    &:hover {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
    }

    span {
      margin-top: auto;
      margin-bottom: 15px;
    }
  }

  input {
    padding-top: 15px;
    text-align: center;
    font-size: 56px;
    font-weight: 100;
    outline: none;
    border: none;
    display: inline-block;

    &::placeholder {
      font-weight: 100;
    }
  }

  input[type='number']::-webkit-outer-spin-button, input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  label {
    text-align: left;
    color: #07195d;
    font-size: 19px;
    font-weight: 700;
    text-transform: capitalize;
    padding: 10px 20px;
  }
}

.--blue {
  background-image: linear-gradient(to top, #406dc0 0%, #335ca7 100%);
  color: #ffffff;

  input {
    background-color: transparent;
    color: #ffffff;

    &::placeholder {
      color: #ffffff;
    }
  }

  label {
    color: #ffffff;
  }

  span {
    color: #ffffff;
  }
}

button {
  align-self: center;
  width: 351px;
  height: 65px;
}
</style>
