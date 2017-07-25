<template>
  <div class="greenguardian">
   <div class="main-nav">
        <el-row>
            <el-col :span="12"><div class="grid-content ">
                <el-menu :default-active="activeIndex2" class="el-menu el-menu-demo" mode="horizontal" @select="handleSelect">
                  <el-submenu index="1">
                    <template slot="title" >预报监控</template>
                    <el-menu-item index="forestRespGrid">森防责任网</el-menu-item>
                    <el-menu-item index="hxqxdjyb">火险气象等级预报</el-menu-item>
                    <el-menu-item index="hxqxdjyb">地质灾害点等级预报</el-menu-item>
                  </el-submenu>
                  <el-menu-item index="yagl">预案管理</el-menu-item>
                  <el-menu-item index="yagl">档案管理</el-menu-item>
                  <el-menu-item index="yagl">可燃物管理</el-menu-item>
                </el-menu>
              </div></el-col>
            <el-col :span="10"><div class="grid-content ">
               <midNav></midNav>
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
             <Diagram></Diagram>  

  </div>
</template>

<script>
import rightNav from './common/rightNav.vue'
import midNav from './common/midNav.vue'
import yagl from './sfgl/yagl.vue'
import BDmap from './common/map.vue'
import hxqxdjyb from './sfgl/hxqxdjyb.vue'
import Diagram from './common/Diagram.vue'

export default {
  name: 'greenguardian',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      search:"",
      activeIndex2: "",
    }
  },
  components:{
    rightNav,
    midNav,
    BDmap,
       Diagram,

  },
  methods:{
    handleSelect(key, keyPath) {
      var url='/greenGuardian/'+key
      console.log(url)
      this.$router.push(url);
    },
  }
}
</script>

<style scoped>
.greenguardian{
    height:100%;
}
.imgIcon{
    display: inline-block;
    width: 24px;
    height: 24px;
    padding: 12px 10px 12px 10px;

}
.BDmap{
    height:94.8%;
}
</style>