<template>
  <div id="home">  
        <listNav></listNav>
        <div id="rv">
        <router-view></router-view>
                 <!-- <Diagram> </Diagram> -->
        </div>    
  </div>
</template>

<script>
import listNav from './common/listNav.vue'

export default {
  name: 'home',
  components:{
    listNav,
  }
}
</script>

<style>
#home{
      background-color: #17665C;
          height:100%;

}
#rv{
  margin-left: 96px;
      height:100%;

}
/*-- 修改E-ui --*/

i.el-input__icon{
  padding-top: 4px;
}
.el-col-12,.el-col-8,.el-col-16,.el-col-9,.el-row,.el-col-2,.el-col-18,.el-col-4{
    height: 48px;
}

.el-menu-demo{
  background-color: #17665C ;
    height: 48px;
}

.el-menu--horizontal .el-submenu .el-menu-item.is-active,
.el-menu-item.is-active ,
.el-menu-item,.el-submenu__title{
    color: #ffffff ;
} 
.el-menu--horizontal>.el-menu-item:hover, 
.el-menu--horizontal>.el-submenu.is-active .el-submenu__title,
.el-menu--horizontal>.el-submenu:hover .el-submenu__title,
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 3px solid #7AC600;
} 
.el-menu--horizontal .el-submenu>.el-menu ,
.el-menu--horizontal .el-menu-item:hover, 
.el-menu--horizontal .el-submenu__title:hover,
.el-menu--horizontal .el-menu .el-menu-item,
.el-submenu__title ,
.el-submenu,
.el-menu-item ,
.el-menu-item.is-active {
    background-color: #17665C;
}
.el-menu--horizontal .el-menu .el-menu-item:hover{
    background-color:rgba(82,204,188,0.10);
} 

.el-menu--horizontal .el-menu-item ,
.el-menu--horizontal .el-submenu .el-submenu__title,
.el-menu-item ,
.el-menu-item.is-active{
    height: 47px;
    line-height: 44px;
}
.el-menu--horizontal .el-submenu>.el-menu{
top:52px;
}
.el-menu--horizontal .el-submenu .el-submenu__icon-arrow{
  color: rgba(255, 255, 255, 0.7)
}
.el-menu>.el-menu-item.imgIcon-item, .el-menu>.el-submenu.imgIcon-item>.el-submenu__title{
    padding-left:0px; 
    padding-right:0px; 
}
</style>