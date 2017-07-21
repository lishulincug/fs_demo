<template>
  <div class="monitor">
   <div class="main-nav">
        <el-row>
            <el-col :span="20"><div class="grid-content ">
                <el-menu :default-active="activeIndex2" class="el-menu el-menu-demo" mode="horizontal" @select="handleSelect">
                  <el-menu-item index="zdjc">站点检测</el-menu-item>
                  <el-submenu index="2">
                    <template slot="title" >无人机监测</template>
                    <el-menu-item index="fxjl">飞行记录</el-menu-item>
                    <el-menu-item index="wrjsp">无人机视频</el-menu-item>
                  </el-submenu>
                </el-menu>
              </div></el-col>
            <el-col :span="2"><div class="grid-content ">
                <monintorNav></monintorNav>
            </div></el-col>
            <el-col :span="2"><div class="grid-content ">
                      <rightNav></rightNav>
              </div></el-col>
          </el-row>
      </div>
      <div class="BDmap"> 
        <BDmap></BDmap>
      </div>
       <router-view></router-view> 
  </div>
</template>

<script>
import rightNav from './common/rightNav.vue'
import monintorNav from './common/monintorNav.vue'
import BDmap from './common/map.vue'

export default {
  name: 'monitor',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      search:"",
      activeIndex2: ""
    }
  },
  components:{
    rightNav,
    monintorNav,
    BDmap,
  },
  methods:{
    handleIconClick(){

    },
    handleSelect(key, keyPath) {
      var url='/monitor/'+key
      console.log(url)
      this.$router.push(url);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.monitor{
  height:100%;
}
.BDmap{
    height:94.8%;
}
</style>