<template lang="pug">
  #Search
    Menu
    .container 
      form(method='POST'  @submit.prevent="checkForm" id="form_search").form
          .fieldset
            div.form-group(v-bind:class="{ error_br: errors.from }")
                label(for='from', ) From 
                v-select#from.form-control.bold(type='text', spellcheck="false", placeholder="", :options="getCityListFrom", label='short', v-model='from_country')
                  template(slot="from_option" slot-scope="from_option")
                    span {{ from_option.full }}
                span.bottom_text {{ from_country ? from_country.full : ''}}
            a.switcher(v-on:click="switcher")
              
              
            div.form-group(v-bind:class="{ error_br: errors.to }")
                label(for='to', ) To
                v-select#to.form-control.bold(type='text', spellcheck="false", placeholder="", :options="getCityListTo", label='short', v-model='to_country')
                  template(slot="to_option" slot-scope="to_option")
                    span {{ to_option.full }}
                span.bottom_text {{ to_country ? to_country.full : ''}}

          .fieldset
            div.form-group(v-bind:class="{ error_br: errors.date }")
                label(for='departing', ) departing 
                datepicker#departing.form-control.bold(:format="format", :disabledDates="disabledDates",   placeholder='20/01',  v-model='departing')
                span.bottom_text {{customFormatter(departing)}}
            
            div.form-group
                label(for='returning', ) returning
                datepicker#returning.form-control.bold(:format="format", :disabledDates="disabledDatesDeparting",  placeholder='21/01',  v-model='returning')
                span.bottom_text {{customFormatter(returning)}}

          .fieldset
            div.form-group(v-bind:class="{ error_br: errors.pass }")
                label(for='passengers', ) passengers 
                input#passengers.form-control.bold(type='number',  placeholder='0',  v-model.number='passengers')
                span.bottom_text {{passengers ? passengers : 0}} Adults
            div.form-group.--blue
                label(for='class',) class
                v-select#status.form-control(:options="status", label='code', v-model='sname').bold
                  template(slot="option" slot-scope="option")
                    span {{ option.label }}
          
                span.bottom_text.option-span {{ sname ? sname.label : '' }}
          p.errors(v-if="errors.length")
            b Some errors in fields:
            ul 
              li(v-for="error in errors") {{ error }}
          button.btn(type='submit') Search Flights


</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Search",
  components: {},
  data: () => ({
    errors: {},
    flight: {},
    departing: null,
    returning: null,
    passengers: null,
    from_country: null,
    to_country: null,
    dateArray: null,
    format: "dd/MM",

    disabledDates: {
      to: new Date()
    },

    sname: "",
    status: [
      { label: "Business Class", code: "BC" },
      { label: "First Class", code: "FC" },
      { label: "Econom Class", code: "EC" }
    ]
  }),
  methods: {
    ...mapActions(["fetchCityList", "addFlights"]),
    getDates(startDate, stopDate) {
      Date.prototype.addDays = function(days) {
        this.setDate(this.getDate() + days);
        return this;
      };
      let dateArray = [];
      let currentDate = startDate;
      while (currentDate <= stopDate) {
        dateArray.push(new Date(currentDate));
        currentDate = currentDate.addDays(1);
      }
      return dateArray;
    },
    search() {
      this.flight = {
        departing: this.departing,
        returning: this.returning,
        passengers: this.passengers,
        from_country: this.from_country,
        to_country: this.to_country
      };
      this.flight.dateArray = this.getDates(this.departing, this.returning);
      
      this.$store
        .dispatch("search", this.flight)
        
        .then(() => this.addFlights(this.flight))
        .then(() => this.$router.push("outbound"))
        .catch(err => console.log("result", err));
    },
    switcher: function(event) {
      this.buffer = this.from_country;
      this.from_country = this.to_country;
      this.to_country = this.buffer;
    },
    customFormatter(date) {
      let date_new;
      let options = {
        weekday: "long",
        year: "numeric"
      };
      if (date) {
        date_new = date.toLocaleString("en-US", options);
      }

      return date_new;
    },
    checkForm: function(e) {
      if (
        this.from_country &&
        this.to_country &&
        this.departing &&
        this.passengers
      ) {
        this.search();
        return true;
      }

      this.errors = [];

      if (!this.from_country) {
        // this.errors.push("From");
        this.errors.from = true;
      }
      if (!this.to_country) {
        // this.errors.push("From");
        this.errors.to = true;
      }
      if (!this.departing) {
        // this.errors.push("Departing");
        this.errors.date = true;
      }
      if (!this.passengers) {
        // this.errors.push("Passengers");
        this.errors.pass = true;
      }
      e.preventDefault();
    }
  },
  computed: {
    ...mapGetters(["getCityListFrom", "getCityListTo"]),
    disabledDatesDeparting: function() {
      return {
        to: this.departing
      };
    }
  },
  mounted() {
    this.fetchCityList();
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
    transition: all 0.5s ease-out;
    border-radius: 10px;
    color: #313131;

    &:hover {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
    }

    .bottom_text {
      position: absolute;
      bottom: 15px;
      width: 100%;
    }
  }

  input {
    padding-top: 15px;
    text-align: center;
    font-size: 56px;
    font-weight: 100;
    outline: none;
    border: none;

    &::placeholder {
      font-weight: 100 !important;
    }
  }

  .v-select.form-control {
    // display: flex;
    // justify-content: center;
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

  .vs__selected-options .vs__selected {
    color: #ffffff;
  }

  .vs--single .vs__selected {
    color: #ffffff;
  }

  .vs__search, .vs__search:focus {
    color: #ffffff;
  }

  .vs__search::placeholder {
    color: #ffffff;
  }

  label {
    color: #ffffff;
  }

  .option-span {
    color: #ffffff;
  }
}

.btn {
  align-self: center;
  width: 351px;
  height: 65px;
}
</style>
