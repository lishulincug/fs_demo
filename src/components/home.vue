<template>
  <div id="home">  
        <listNav></listNav>
        <div id="rv">
        <router-view></router-view>
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
    height:100%;

}
#rv{
  margin-left: 96px;
      height:100%;

}
li.number.active{
        background-color: #5EBF1D;
        border:  0;
}

.editForm-item .el-input__inner{
    border-top:0 !important;
    border-right:0 !important;
    border-left:0 !important;
    border-bottom:1px solid #E3E6E5;
}

</style>