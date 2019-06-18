<template lang="pug">
  #Search
    Header
    Menu
    .container 
      form(method='POST'  @submit.prevent="checkForm" id="form_search").form
          .fieldset
            div.form-group
                label(for='from', ) From 
                input#from.form-control(type='text',  v-model.trim='from[0].short')
                span {{ from[0].full}}
            a.switcher(v-on:click="switcher")
              
              
            div.form-group
                label(for='to', ) To
                input#to.form-control(type='text',  v-bind:placeholder="to.short" v-model.trim='to[0].short')
                span {{ to[0].full}}

          .fieldset
            div.form-group
                label(for='departing', ) departing 
                datepicker#departing.form-control(:format="format", :disabledDates="disabledDates", placeholder='01/01'  v-model='departing')
                span Saturday, 2018
            
            div.form-group
                label(for='returning', ) returning
                datepicker#returning.form-control(:format="format", :disabledDates="disabledDates", placeholder='01/01'  v-model='returning')
                span Saturday, 2018

          .fieldset
            div.form-group
                label(for='passengers', ) passengers 
                input#passengers.form-control(type='number',  placeholder='0'  v-model.number='passengers')
                span {{passengers ? passengers : 0}} Adults
            div.form-group.--blue
                label(for='class',) class
                input#status.form-control(type='text', value="BC" placeholder='BC'  v-model.trim='sname')
                span {{ status[sname] }}
          p.errors(v-if="errors.length")
            b Some errors in fields:
            ul 
              li(v-for="error in errors") {{ error }}
          button.btn(type='submit') Search Flights


</template>

<script>
import Header from "../Header";
import Menu from "../Menu";
import Datepicker from "vuejs-datepicker";

export default {
  name: "Search",
  components: {
    Header,
    Menu,
    Datepicker
  },
  data: () => ({
    errors: [],
    format: "dd/MM",
    from: [{ full: "Petersburg", short: "PTB" }],
    to: [{ full: "Moscow", short: "MCW" }],
    departing: null,
    returning: null,
    passengers: null,
    disabledDates: {
      to: new Date() // Disable all dates up to specific date
    },
    sname: "",
    status: { BC: "Business Class", FC: "First Class", EC: "Econom Class" }
  }),
  methods: {
    switcher: function(event) {
      this.buffer = this.from;
      this.from = this.to;
      this.to = this.buffer;
    },
    checkForm: function(e) {
      if (this.from && this.departing && this.passengers) {
        this.$router.push("no");
        return true;
      }

      this.errors = [];

      if (!this.from) {
        this.errors.push("From?");
      }
      if (!this.departing) {
        this.errors.push("Departing?");
      }
      if (!this.passengers) {
        this.errors.push("Passengers?");
      }
      e.preventDefault();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.switcher {
  display: block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='20' viewBox='0 0 15 20'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23d72027' d='M.204 15.13l4.464 4.657a.677.677 0 0 0 .986 0 .75.75 0 0 0 0-1.03l-3.273-3.414h11.922c.385 0 .697-.326.697-.727 0-.402-.312-.728-.697-.728H2.38l3.273-3.415a.75.75 0 0 0 0-1.029.681.681 0 0 0-.986 0L.204 14.101a.75.75 0 0 0 0 1.03z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23d72027' d='M14.796 4.87L10.332.213a.677.677 0 0 0-.986 0 .75.75 0 0 0 0 1.03l3.273 3.414H.697c-.385 0-.697.326-.697.727 0 .402.312.728.697.728H12.62L9.346 9.527a.75.75 0 0 0 0 1.029.681.681 0 0 0 .986 0l4.464-4.657a.75.75 0 0 0 0-1.03z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: contain;
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
      opacity: 0.4;
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
