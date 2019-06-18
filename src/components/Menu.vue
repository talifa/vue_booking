<template lang="pug">
  #menu-nav
    router-link(:to="{ name: 'search' }").link Search
    router-link(:to="{ name: 'manage' }").link Manage
    router-link(:to="{ name: 'status' }").link Status
    router-link(:to="{ name: 'history' }").link History
    router-view
</template>

<script>
export default {
  name: "Menu",
  components: {}
};
</script>

<style scoped lang="stylus">
#menu-nav {
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
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
