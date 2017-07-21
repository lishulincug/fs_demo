<template>
  <div id="mn">
        <ul>
            <li><img src="../../assets/photo/camera1@2x.png" @click="routerGo('/')"/></li>    
            <li><img src="../../assets/photo/camera4@2x.png" @click="routerGo('/userinfo')"/></li>    
            <li><img src="../../assets/photo/camera12@2x.png" @click="change"/></li>    
        </ul>     
  </div>
</template>

<script>
export default {
  name: 'monintorNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      signupActive:''
    }
  },
  methods:{
    routerGo(url){
        this.$router.push(url);
      },
    change(){
      this.signupActive=true;
    }
  },
}
</script>
<style scoped>
#mn{
  text-align: center;
}
ul{
  height:48px
}
li{
    list-style-type:none;
    display: inline-block;
    height:48px
}
img{
    display: inline-block;
    width: 24px;
    height: 24px;
    padding: 12px 10px 12px 10px;
}

</style>