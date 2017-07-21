<template>
  <div class="energency">
   <div class="main-nav">
        <el-row>
            <el-col :span="12"><div class="grid-content ">
                <el-menu :default-active="activeIndex2" class="el-menu el-menu-demo" mode="horizontal" @select="handleSelect">
                  <el-submenu index="1">
                    <template slot="title"  >预案预警</template>
                    <el-menu-item index="1-1">应急预案管理</el-menu-item>
                    <el-menu-item index="1-2">应急预警管理</el-menu-item>
                  </el-submenu>
                  <el-submenu index="2">
                    <template slot="title" >信息管理</template>
                    <el-menu-item index="2-1">车辆信息管理</el-menu-item>
                    <el-menu-item index="2-2">扑火队信息管理</el-menu-item>
                    <el-menu-item index="2-3">物资库信息管理</el-menu-item>
                  </el-submenu>
                  <el-menu-item index="3">成果管理</el-menu-item>
                  <el-submenu index="4">
                    <template slot="title" >人员管理</template>
                    <el-menu-item index="4-1">通讯录</el-menu-item>
                    <el-menu-item index="4-2">人员信息管理</el-menu-item>                   
                  </el-submenu>
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
            <Diagram></Diagram>  

  </div>
</template>

<script>
import rightNav from './common/rightNav.vue'
import midNav from './common/midNav.vue'
import BDmap from './common/map.vue'
import Diagram from './common/Diagram.vue'

export default {
  name: 'energency',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      search:"",
      activeIndex2: ""
    }
  },
  components:{
    rightNav,
    midNav,
    BDmap,
       Diagram,
  },
  methods:{
    handleIconClick(){

    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>
<style scoped>
.energency{
  height:100%;
}
.BDmap{
    height:94.8%;
}
</style>