<template>
  <div class="main" id="main">
      <headerTool></headerTool>
      <div id="patrol">
        <DutyNet></DutyNet>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Diagram from './common/Diagram.vue'
import headerTool from './common/headerTool.vue'
import DutyNet from './dutyNet.vue'
export default {
  name: 'patrol',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      search:""
    }
  },
  components:{
    Diagram,
    headerTool,
    DutyNet
  },
  methods:{
      setWidth() {
          var patrol=document.getElementById("patrol");
          var total = document.documentElement.clientHeight;
          patrol.style.height=total-48+"px";
      }
      },
      mounted() {
          this.setWidth();
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
    height:100%;
}

</style>
