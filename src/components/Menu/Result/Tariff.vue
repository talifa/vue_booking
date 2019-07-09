<template lang="pug">
  #Tariff
    .tabs(:tariffdata='tariffdata')
      .tabs-header
        .tabs-header__item(v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]")  {{tariffdata[0].name}}
        .tabs-header__item(v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active' : '' ]") {{tariffdata[1].name}}
        .tabs-header__item(v-on:click="activetab='3'" v-bind:class="[ activetab === '3' ? 'active' : '' ]") {{tariffdata[2].name}}
      .tabs-body
        #tab1.tabs-body__item(v-if="activetab ==='1'")
          ul.list
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Checked Baggage:
                .list-row__value {{tariffdata[0].Checked_Baggage}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Cabin Baggage:
                .list-row__value {{tariffdata[0].Cabin_Baggage}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Regular Seat Selection:
                .list-row__value {{tariffdata[0].Regular_Seat_Selection}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Skyward Miles:
                .list-row__value {{tariffdata[0].Skyward_Miles}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Upgrade To Business:
                .list-row__value {{tariffdata[0].Upgrade_To_Business}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Changes Fees:
                .list-row__value {{tariffdata[0].Changes_Fees}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Refund Fees:
                .list-row__value {{tariffdata[0].Refund_Fees}}   
          .inr INR: 
            span {{tariffdata[0].inr}}                              
        #tab2.tabs-body__item(v-if="activetab ==='2'")
          ul.list
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Checked Baggage:
                .list-row__value {{tariffdata[1].Checked_Baggage}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Cabin Baggage:
                .list-row__value {{tariffdata[1].Cabin_Baggage}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Regular Seat Selection:
                .list-row__value {{tariffdata[1].Regular_Seat_Selection}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Skyward Miles:
                .list-row__value {{tariffdata[1].Skyward_Miles}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Upgrade To Business:
                .list-row__value {{tariffdata[1].Upgrade_To_Business}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Changes Fees:
                .list-row__value {{tariffdata[1].Changes_Fees}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Refund Fees:
                .list-row__value {{tariffdata[1].Refund_Fees}}    
          .inr INR: 
            span {{tariffdata[1].inr}}  
        #tab3.tabs-body__item(v-if="activetab ==='3'")
          ul.list
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Checked Baggage:
                .list-row__value {{tariffdata[2].Checked_Baggage}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Cabin Baggage:
                .list-row__value {{tariffdata[2].Cabin_Baggage}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Regular Seat Selection:
                .list-row__value {{tariffdata[2].Regular_Seat_Selection}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Skyward Miles:
                .list-row__value {{tariffdata[2].Skyward_Miles}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Upgrade To Business:
                .list-row__value {{tariffdata[2].Upgrade_To_Business}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Changes Fees:
                .list-row__value {{tariffdata[2].Changes_Fees}}
            li.list-item
              .list-row
                .list-row__title
                  img.list-row__icon(src='@/assets/img/bagg.svg' alt='')
                  span Refund Fees:
                .list-row__value {{tariffdata[2].Refund_Fees}}  
          .inr INR: 
            span {{tariffdata[2].inr}}   
        button.btn(type='submit') Select

</template>

<script>
export default {
  name: "Tariff",
  props: ["tariffdata"],
  data: () => ({ activetab: "1" }),
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#Tariff {
  border-radius: 10px;
  background-image: linear-gradient(to top, #ffffff 0%, #f2f2f2 100%);
  border: 1px solid #f2f2f2;
}

.inr {
  float: right;
  margin: 30px 15px;
  font-size: 16px;
  font-weight: 400;
  color: #313131;

  span {
    color: #3a7b59;
    font-weight: 600;
  }
}

.tabs-header {
  display: flex;
  justify-content: space-around;
  color: #313131;
  font-size: 16px;
  font-weight: 400;
  padding: 25px;
  cursor: pointer;
  position: relative;
  z-index: 1;

  .active {
    color: #3a7b59;
    font-weight: 600;
    position: relative;

    &::before {
      transform: translateX(-50%);
      border-radius: 100%;
      position: absolute;
      background: #3a7b59;
      bottom: -5px;
      height: 5px;
      content: '';
      width: 5px;
      left: 50%;
    }
  }
}

.list {
  padding: 0 15px;
}

.list-item {
  list-style-type: none;

  .list-row {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 15px 0;

    .list-row__title {
      color: #505050;
      font-weight: 300;
    }

    .list-row__value {
      color: #3c3c3c;
      font-weight: 400;
    }
  }
}
</style>
