<template>
  <div class="monitor">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'monitor',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        search: "",
        activeIndex2: ""
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .monitor {
    height: 100%;
  }

</style>
