<template>
  <div class="main" id="main">
      <headerTool></headerTool>
      <router-view></router-view> 
       <Diagram id="fireSciencManagement"></Diagram>   
   </div>
</template>

<script>
import Diagram from './common/Diagram.vue'
import headerTool from './common/headerTool.vue'

export default {
  name: 'fireSciencManagement',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      search:""
    }
  },
  components:{
    Diagram,
    headerTool,
  },
  methods:{
      setWidth() {
          var fireSciencManagement=document.getElementById("fireSciencManagement");
          var total = document.documentElement.clientHeight;
          fireSciencManagement.style.height=total-48+"px";
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

#Diagram{
  width: 100%
}
</style>