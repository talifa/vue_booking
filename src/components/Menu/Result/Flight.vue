<template lang="pug">
  #flight-comp
    .flight-info
      ul.flight-list
        li(:flights='flights', v-for="(flight,index) in flights").flight-box 
          .flight-top
            .flight-data
              .from 
                .airport {{flight.from}}
                .when {{flight.when_from}}
              .delay
                .long {{flight.long}}
                svg(xmlns='http://www.w3.org/2000/svg' width='200' height='15' viewbox='0 0 200 15')
                  g
                    g(opacity='.33')
                      path(d='M4.645 14.71h1.548l3.871-6.194h4.258a1.16 1.16 0 0 0 1.161-1.162 1.16 1.16 0 0 0-1.16-1.16h-4.259L6.194 0H4.644L6.58 6.193H2.323L1.16 4.645H0l.774 2.71L0 10.065h1.161l1.162-1.55H6.58z')
                    g(xmlns='http://www.w3.org/2000/svg' opacity='.5')
                      path(fill='none' stroke='#707070' stroke-dasharray='4 4' stroke-miterlimit='50' d='M19.575 7.5H194.28')

                    g
                      path(fill='#a9a9a9' d='M195.075 7.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z')

                .transfer {{flight.transfer}}
              .to
                .airport {{flight.to}}
                .when {{flight.when_to}}
            .flight-details
              .model
                img(src="~@/assets/img/plane.png" height='18px') 
                .model-info
                  .from {{flight.plane_from}}
                  .to {{flight.plane_to}}
              .price
                .price-info From INR: 
                  span.price-number  {{flight.price}}
                .price-status(v-if="index == 0") Lowest price
            .more( @click="(e) => e.target.classList.toggle('is_collapsed')" ) 
              button.arrow-more(@click="toggleShow(index)")
                svg(xmlns='http://www.w3.org/2000/svg' width='11' height='9' viewbox='0 0 11 9').arrow-icon
                  g
                    g
                      g
                        path(fill='none' stroke='#707070' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='50' stroke-width='1.5' d='M9.345 1.235v0l-4.01 3.918v0L1.5 1.235v0')
                      g
                        path(fill='none' stroke='#707070' stroke-linecap='round' stroke-miterlimit='50' stroke-width='1.5' d='M1.5 7.74h7.994')
          transition(name="slide")
            div.flight-tariff(v-if="flight.isShow")
              Tariff(:tariffdata="tariffdata")
        


                  
</template>

<script>
import { mapGetters } from "vuex";
import Tariff from "./Tariff";

export default {
  name: "Flight",
  props: ["flights", "tariffdata"],
  components: { Tariff },

  data: () => ({
    isCollapsed: false
  }),
  computed: {
    ...mapGetters(["flightData"])
  },
  methods: {
    toggleShow(idx) {
      this.flights[idx].isShow = !this.flights[idx].isShow;

      // this.flights.forEach(function(item, i) {
      //   item.isShow = !item.isShow;
      // });
    },
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
    },
    collapsedToggle() {
      this.isCollapsed = !this.isCollapsed;
    }
  },
  created: function() {
    // if (this.flightData.length === 0) {
    //   console.log(this.flightData);
    //   this.$router.push("search");
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter, .slide-leave-to {
  overflow: hidden;
  max-height: 0;
}

.flight-info {
  .flight-list {
    margin: 0;
    padding: 0;

    .flight-box {
      display: block;
      padding: 20px 15px;
      font-size: 18px;
      font-weight: 500;
      color: #bababa;

      .flight-tariff {
        font-size: 16px;
        font-weight: 500;
        margin-top: -5px;
      }

      .flight-top {
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        padding: 20px 15px;
        font-size: 18px;
        font-weight: 500;
        color: #bababa;
        background: #fff;
        position: relative;
        z-index: 1;
      }

      .airport {
        text-transform: uppercase;
      }

      .when {
        font-weight: 700;
        color: #313131;
      }

      &:not(:last-child) {
        margin-bottom: 30px;
      }

      .flight-data {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;

        .delay {
          font-size: 14px;
          text-align: center;
        }
      }

      .flight-details {
        display: flex;
        justify-content: space-between;
        padding: 3px 0;
        align-items: flex-end;

        .model {
          font-size: 14px;
          display: flex;
          align-items: center;

          .model-info {
            padding: 0 5px;
          }
        }

        .price {
          color: #313131;

          .price-info {
            .price-number {
              color: #3a7b59;
              font-weight: 700;
            }
          }

          .price-status {
            color: #d72027;
            font-size: 14px;
            float: right;
          }
        }
      }

      .more {
        display: flex;
        justify-content: center;
        z-index: 1000;

        .arrow-more {
          cursor: pointer;
          background-color: transparent;
          // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='9' viewBox='0 0 11 9'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath fill='none' stroke='%23707070' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='50' stroke-width='1.5' d='M9.345 1.235v0l-4.01 3.918v0L1.5 1.235v0'/%3E%3C/g%3E%3Cg%3E%3Cpath fill='none' stroke='%23707070' stroke-linecap='round' stroke-miterlimit='50' stroke-width='1.5' d='M1.5 7.74h7.994'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          // background-repeat: no-repeat;
          // background-position: 50%;
          // height: 10px;
          border: none;
          outline: none;
          width: 100%;
        }

        .arrow-icon {
          transition: transform 0.2s ease;
          z-index: -2000;
        }

        .is_collapsed > .arrow-icon {
          transform: rotate(180deg);
        }

        // .is_collapsed > .arrow-icon ~ .arrow-icon {
        // transform: rotate(0deg);
        // }
        .arrow-more.is_collapsed {
          // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='9' viewBox='0 0 11 9'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath fill='none' stroke='%23707070' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='50' stroke-width='1.5' d='M1.649 7.74v0l4.01-3.918v0L9.495 7.74v0'/%3E%3C/g%3E%3Cg%3E%3Cpath fill='none' stroke='%23707070' stroke-linecap='round' stroke-miterlimit='50' stroke-width='1.5' d='M9.494 1.235H1.5'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      }
    }
  }
}
</style>
