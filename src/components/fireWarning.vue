<template>
  <div class="fireWarning">
      <headerTool></headerTool>
      <div class="BDmap"> 
        <BDmap></BDmap>
      </div>
       <router-view></router-view> 
  </div>
</template>

<script>
import headerTool from './common/headerTool.vue'
import BDmap from './common/map.vue'

export default {
  name: 'fireWarning',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      search:"",
      activeIndex2: ""
    }
  },
  components:{
    headerTool,
    BDmap,
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fireWarning{
  height:100%;
}
.BDmap{
    height:94.8%;
}
</style>