<template lang="pug">
  #History
    Menu
    .container
      h1 Search history 
      ul.history-list   
        li.history-item(v-for='item in getFlightsList' @click="goToResult(item)") 
          p From: #[span {{item.from_country.full}}]
          p To: #[span {{item.to_country.full}}]
          p Date: #[span {{customFormatter(item.departing)}} - {{customFormatter(item.returning)}}]
          p Passengers: #[span {{item.passengers}} ]
        
</template>



<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "History",
  components: {},

  data: () => ({
    isCollapsed: false
  }),
  computed: {
    ...mapGetters(["getFlightsList"]),
    ...mapState(["flightsList"])
  },

  methods: {
    ...mapActions(["checkFlights"]),
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
    customFormatter(date) {
      let options = {
        weekday: "long",
        year: "numeric",
        day: "numeric",
        month: "long"
      };
      if (date) {
        date = new Date(date);
        date = date.toLocaleString("en-US", options);
      }

      return date;
    },
    goToResult(item) {
      item.departing = new Date(item.departing);
      item.returning = new Date(item.returning);

      this.$store
        .dispatch("search", item)

        .then(() => this.$router.push("outbound"))
        .catch(err => console.log(err));
    }
  },
  created: function() {
    this.checkFlights();
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#History {
  h1 {
    text-align: center;
  }

  .history-list {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: column;

    .history-item {
      margin: 5px;
      padding: 10px;
      list-style: none;
      border: 1px solid #fff;
      border-radius: 4px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
      transition: all 0.05s ease-out;
      cursor: pointer;

      p {
        span {
          font-weight: 600;
        }
      }

      &:hover {
        border: 1px solid rgba(0, 0, 0, 0.15);
      }
    }
  }
}
</style>
