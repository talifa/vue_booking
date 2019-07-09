<template lang="pug">
  #Outbound
    .container
      Flight(:flights='flights', :tariffdata="tariffdata")             
</template>

<script>
import { mapGetters } from "vuex";
import Tariff from "./Tariff";
import Flight from "./Flight";

export default {
  name: "Outbound",
  components: { Tariff, Flight },

  data: () => ({
    flights: [
      {
        isShow: false,
        from: "TRV",
        when_from: "04:30",
        long: "04 hrs 15 mins",
        transfer: "Non-stop",
        to: "DXB",
        when_to: "07:07",
        plane_from: "B777",
        plane_to: "EK523",
        plane_icon: "~@/assets/img/plane.png",
        price: "22,677"
      },
      {
        isShow: false,
        from: "TRV",
        when_from: "05:30",
        long: "04 hrs 15 mins",
        transfer: "Non-stop",
        to: "DXB",
        when_to: "07:07",
        plane_from: "B777",
        plane_to: "EK523",
        plane_icon: "~@/assets/img/plane.png",
        price: "22,677"
      },
      {
        isShow: false,
        from: "TRV",
        when_from: "06:30",
        long: "04 hrs 15 mins",
        transfer: "Non-stop",
        to: "DXB",
        when_to: "07:07",
        plane_from: "B777",
        plane_to: "EK523",
        plane_icon: "~@/assets/img/plane.png",
        price: "22,677"
      }
    ],
    tariffdata: [
      {
        name: "Saver",
        Checked_Baggage: "10kg",
        Cabin_Baggage: "1 x 7kg",
        Regular_Seat_Selection: "At a charge",
        Skyward_Miles: "510 Miles",
        Upgrade_To_Business: "47,500 Miles",
        Changes_Fees: "INR 4,000",
        Refund_Fees: "Restricted",
        icon: "../../assets/img/bagg.svg",
        inr: "22,677"
      },
      {
        name: "Flex",
        Checked_Baggage: "20kg",
        Cabin_Baggage: "1 x 7kg",
        Regular_Seat_Selection: "At a charge",
        Skyward_Miles: "510 Miles",
        Upgrade_To_Business: "47,500 Miles",
        Changes_Fees: "INR 4,000",
        Refund_Fees: "Restricted",
        icon: "../../assets/img/bagg.svg",
        inr: "22,677"
      },
      {
        name: "Flex Plus",
        Checked_Baggage: "30kg",
        Cabin_Baggage: "1 x 7kg",
        Regular_Seat_Selection: "At a charge",
        Skyward_Miles: "510 Miles",
        Upgrade_To_Business: "47,500 Miles",
        Changes_Fees: "INR 4,000",
        Refund_Fees: "Restricted",
        icon: "../../assets/img/bagg.svg",
        inr: "22,677"
      }
    ]
  }),
  computed: {
    ...mapGetters(["flightData"])
  },
  methods: {},
  created: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
