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



</style>