<template lang="pug">
  #Outbound
    SubMenu
    .container
      .search-header
        div {{flightData.from_country.full}}
        div.arrow
        div {{flightData.to_country.full}}
        div.flights-length ({{flights.length}} options)
      carousel.date-slider 
        img 
        slide {{customFormatter(flightData.departing)}}
        slide {{customFormatter(flightData.returning)}}
      .flight-info
        ul.flight-list
          li(v-for="(flight,index) in flights").flight-box 
            .flight-date 
              .from 
                .airport {{flight.from}}
                .when {{flight.when_from}}
              .delay
                .long {{flight.long}}
                .transfer {{flight.transfer}}
              .to
                .airport {{flight.to}}
                .when {{flight.when_to}}
            .flight-details
              .model
                img(src="plane_icon") 
                .from {{flight.plane_from}}
                .to {{flight.plane_to}}
              .price
                .price-info From INR: {{flight.price}}
                .price-status(v-if="index == 0") Lowest price
    
</template>

<script>
import Header from "../../Header";
import SubMenu from "./SubMenu";
import { mapGetters } from "vuex";

export default {
  name: "Outbound",
  components: {
    Header,
    SubMenu
  },

  data: () => ({
    flights: [
      {
        from: "TRV",
        when_from: "04:30",
        long: "04 hrs 15 mins",
        transfer: "Non-stop",
        to: "DXB",
        when_to: "07:07",
        plane_from: "B777",
        plane_to: "EK523",
        plane_icon: "/assets/img/plane.png",
        price: "22,677"
      },
      {
        from: "TRV",
        when_from: "05:30",
        long: "04 hrs 15 mins",
        transfer: "Non-stop",
        to: "DXB",
        when_to: "07:07",
        plane_from: "B777",
        plane_to: "EK523",
        plane_icon: "/assets/img/plane.png",
        price: "22,677"
      },
      {
        from: "TRV",
        when_from: "06:30",
        long: "04 hrs 15 mins",
        transfer: "Non-stop",
        to: "DXB",
        when_to: "07:07",
        plane_from: "B777",
        plane_to: "EK523",
        plane_icon: "/assets/img/plane.png",
        price: "22,677"
      }
    ]
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
        month: "long"
      };
      if (date) {
        date_new = date.toLocaleString("en-US", options);
      }

      return date_new;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.search-header {
  display: flex;
  justify-content: center;
  color: #313131;
  font-size: 22px;
  font-weight: 500;
  align-items: center;
  padding: 25px 0;
  border: 1px solid #e5e5e5;
  border-left: none;
  border-right: none;

  div {
    padding: 0 15px;
  }

  .arrow {
    display: block;
    width: 27px;
    height: 35px;
    cursor: pointer;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 50%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='27' height='15' viewBox='0 0 27 15'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath fill='none' stroke='%23d72027' stroke-linecap='round' stroke-miterlimit='50' stroke-width='1.8' d='M1 7.182h24.042'/%3E%3C/g%3E%3Cg%3E%3Cpath fill='none' stroke='%23d72027' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='50' stroke-width='1.8' d='M19.569 13.364v0l6.182-6.182v0L19.569 1v0'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .flights-length {
    font-size: 16px;
    font-weight: 400;
  }
}

.date-slider {
  display: flex;
  justify-content: center;
  padding: 25px 0;
}
</style>
