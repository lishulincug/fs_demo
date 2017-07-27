<template>
  <div class="main" id="main">
    <headerTool></headerTool>
    <div id="map">
       <Diagram></Diagram>
    </div>
  </div>
</template>

<script>
  import Diagram from './common/Diagram.vue'
  import headerTool from './common/headerTool.vue'

  export default {
    name: 'main',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        search: ""
      }
    },
    components: {
      Diagram,
      headerTool,
    },
    methods: {
      handleIconClick() {

      },
      setWidth() {
          var map=document.getElementById("map");
          var total = document.documentElement.clientHeight;
          map.style.height=total-48+"px";
      }
    },
    mounted() {
      this.setWidth();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    height: 100%;
  }
  #map{
    height: 100%;
    width: 100%;
  }


</style>
