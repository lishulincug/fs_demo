<template>
  <div class="main" id="main">
      <headerTool></headerTool>
      <router-view></router-view>
  </div>
</template>

<script>
import Diagram from './common/Diagram.vue'
import headerTool from './common/headerTool.vue'

export default {
  name: 'weather',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      search:""
    }
  },
  components:{
    headerTool,
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
    height:100%;
}
.BDmap{
    height:94.8%;
}

</style>
