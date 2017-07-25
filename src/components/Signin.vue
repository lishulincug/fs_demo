<template>
   <div id="login-bg" >
     <div class="warp">
        <div class="login" id="login">
            <div class="logo">
            <img src="../assets/photo/logo@2x.png">
            </div>
            <div class="log-email">
                <div class="log-email">
                <input type="text" placeholder="账号" :class="'log-input'" v-model="account" required>
                <input type="password" placeholder="密码" :class="'log-input'"  v-model="password" required>
                <button class="log-btn" @click="signin">登陆</button>
                <p class="log-p " @click="signup"><a><small>注册</small></a></p>
                </div>
                <div class="footer">
                <p><small>森林防火可视化管理系统</small></p>
                <p><small>-V1.0-</small></p>
                </div>
            </div>
        </div>
       </div> 
    </div>
</template>
<script>
  import sha256 from 'crypto-js/sha256'

  export default {
    name: 'Signin',
    data(){
      return {
        isLoging: false,
        account: '',
        password: ''
      }
    },
    methods:{
      //登录逻辑
      signin(){
              this.$router.push('/')   

        // if(this.account!='' && this.password!=''){
        //   this.toSignin();
        // }
      },
      //登录请求
      toSignin(){

        //设置在登录状态
        // this.isLoging = true;
        // http://localhost:8080
        this.$ajax.post('http://localhost:8090/signin',{
           name: this.account,
            password:sha256( this.password )
        }).then((response) => {
          console.log(response.data)
          var data=response.data;
          if(response.data.type === 'success'){
              this.token = response.headers.token
              sessionStorage.setItem('user', JSON.stringify(data.user));
              sessionStorage.setItem('token', this.token)
              this.$router.push('/')   
          }      
        })
      },
      //跳转注册
      signup(){
          this.$router.push('/signup');
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login-bg{
    height: 100%;
    background-image: url('../assets/photo/bg@1x.png');
    background-repeat:no-repeat;
    text-align: center;
}
.warp{
    width: 650px;
    margin:0% auto;
    text-align: center;
}
  #login{
    width: 650px;
    padding-top:20%; 
    text-align: center;
  }
  .logo{
    padding-top:20px; 
    margin-bottom:74px; 
    text-align:center
  }
  .footer{
    text-align:center;
    color:#F7F7F7;
    font-size: 14px;
    margin: 3% 0%
  }
  img{
    width: 642px;
    height: 80px
  }
  .log-email{
          width:300px; 
          margin: 0 auto;
          text-align: center; 
          margin-top: 20px;
  }
  .log-btn{
          width:300px; 
          display: block; 
          line-height: 48px;
          margin:16px auto 15px; 
          height:48px; 
          color:#F7F7F7; 
          font-size:13px; 
          background-color: #59ACFF;
          border: 0 ;

  }
  .log-p{
    text-align:right;
    margin-top:-3px; 
  }
  a{
    color:#ffffff
  }
  .log-btn:hover,.log-btn:focus{
    color: #fff; 
    opacity: .8;
    }
  .log-btn .text{
        left: 95px; 
        line-height: 50px; 
        text-align: left; 
        position: absolute;
  }
  .log-input{
          display: block; 
          width:267px;    
          overflow: hidden; 
          padding: 0 15px;
          font-size: 13px; 
          border: 1px solid #EBEBEB; 
          margin:0 auto 8px; 
          height: 48px;
          line-height: 48px;
          background-color: rgba(255,255,255,0.80)
 }

</style>
