<template lang="pug">
  #History
    Menu
    .container
      h1 Search history
      ul.history-list 
        li.history-item(v-for='item in flightData')
          p From: #[span {{item.from_country.full}}]
          p To: #[span {{item.to_country.full}}]
          p Date: #[span {{customFormatter(item.departing)}} - {{customFormatter(item.returning)}}]
          p Passengers: #[span {{item.passengers}} ]
        
</template>



<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "History",
  components: {},

  data: () => ({
    isCollapsed: false
  }),
  computed: {
    ...mapGetters(["flightData"])
  },
  methods: {
    customFormatter(date) {
      let date_new;
      let options = {
        weekday: "long",
        year: "numeric",
        day: "numeric",
        month: "long",
        hour12: false,
        hour: "numeric",
        minute: "numeric"
      };

      if (date) {
        date_new = date.toLocaleString("en-US", options);
      }

      return date_new;
    }
  },
  created: function() {}
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
