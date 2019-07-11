<template lang="pug">
  #submenu
    router-link(:to="{ name: 'outbound' }").link Outbound
    router-link(:to="{ name: 'inbound' }").link Inbound
</template>

<script>
export default {
  name: "SubMenu",
  components: {}
};
</script>

<style scoped lang="stylus">
#submenu {
  padding-top: 30px;
  display: flex;
  justify-content: flex-start;
}

.link {
  text-align: center;
  color: #313131;
  opacity: 0.2;
  font-size: 25px;
  font-weight: 700;
  position: relative;
  // margin-right: 55px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:last-of-type {
    // margin-right: 0px;
  }
}

.router-link-active {
  opacity: 1;
}

.router-link-active::before {
  transform: translateX(-50%);
  border-radius: 100%;
  position: absolute;
  background: #d72027;
  bottom: 2px;
  height: 5px;
  content: '';
  width: 5px;
  left: 50%;
}
</style>
