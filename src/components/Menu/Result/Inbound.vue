<template lang="pug">
  #Inbound 
    SubMenu
    Result(:flights='getFlights', :tariffdata="tariffdata")
</template>

<script>
import Result from "./Result";
import SubMenu from "./SubMenu";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Inbound",
  components: { Result, SubMenu },

  data: () => ({
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
    ...mapGetters(["getFlights"])
  },
  methods: {
    ...mapActions(["fetchFlights"])
  },
  created() {
    this.fetchFlights();
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
