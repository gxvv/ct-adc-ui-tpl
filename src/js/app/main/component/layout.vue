<template lang="html">
  <div>
  <navbar></navbar>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 col-md-2 sidebar">
          <sidebar></sidebar>
      </div>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-view></router-view>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from './navbar.vue';
import Sidebar from './sidebar.vue';
export default {
    components: {
        Navbar,
        Sidebar
    }
};
</script>

<style lang="css">
</style>
