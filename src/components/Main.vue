<template>
  <div class="main" id="main">
    <div class="main-nav">
        <el-row>
            <el-col :span="12"><div class="grid-content ">
              <el-row>
                  <el-col :span="8"><img class="imglogo" src="../assets/photo/title@2x.png"/></el-col>
                </el-row>
              </div></el-col>
            <el-col :span="10">
              <midNav></midNav>
            </el-col>
            <el-col :span="2"><div class="grid-content ">
                      <rightNav></rightNav>
              </div></el-col>
          </el-row>
      </div>
      <div class="BDmap"> 
        <BDmap></BDmap>
      </div>
      <Diagram></Diagram>  
  </div>
</template>

<script>
import rightNav from './common/rightNav.vue'
import midNav from './common/midNav.vue'
import Diagram from './common/Diagram.vue'
import BDmap from './common/map.vue'

export default {
  name: 'main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      search:""
    }
  },
  components:{
    rightNav,
    midNav,
    Diagram,
    BDmap,
  },
  methods:{
    handleIconClick(){

    }
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
.main-nav{
    height: 48px;
    background-color: #17665C ; 
}
.imglogo{
  display: inline-block;
  height: 28px;
  padding:10px 24px;
}

</style>