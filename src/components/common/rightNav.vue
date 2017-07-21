<template>
  <div id="rn">
        <ul>
            <li><img src="../../assets/photo/home@2x.png" @click="routerGo('/')"/></li>    
            <li><img src="../../assets/photo/user@2x.png" @click="routerGo('/userinfo')"/></li>    
            <li><img src="../../assets/photo/logout@2x.png"   @click="logout()"/></li> 
        </ul> 
  </div>
</template>

<script>
export default {
  name: 'rightNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      signupActive:'',
    }
  },
  methods:{
    routerGo(url){
        this.$router.push(url);
      },
    logout(){
      var _this = this;
       this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				})
          .then(function(){
              sessionStorage.removeItem('user');
              _this.$router.push('/signin');
          });
    }
  },
}
</script>
<style scoped>
#rn{
  background-color: #115950;  
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